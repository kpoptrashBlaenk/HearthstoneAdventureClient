export default async function handler(req: any, res: any) {
  console.log('backend reached')
  const clientId = process.env.BLIZZARD_CLIENT_ID
  const clientSecret = process.env.BLIZZARD_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'Missing Blizzard credentials' })
  }

  try {
    // get access token
    const tokenResponse = (await fetch('https://oauth.battle.net/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })) as any

    const tokenData = await tokenResponse.json()

    if (!tokenData.access_token) {
      return res.status(500).json({ error: 'Failed to get access token', details: tokenData })
    }

    const fetchCards = async (params: any = []): Promise<any> => {
      let url = `https://eu.api.blizzard.com/hearthstone/cards?set=standard&locale=en_US&namespace=static-eu&sort=manaCost%3Aasc%2Cname%3Aasc&pageSize=400`

      // Create url with params
      params?.forEach((param: any) => {
        url += `&${param.key}=${param.value}`
      })

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      })
      const data = (await response.json()) as any
      let cards = data.cards

      // If more pages and this is not last page
      if (data.pageCount > 1 && data.pageCount > data.page) {
        // Remove last page param if there is
        if (data.page > 1) {
          params?.pop()
        }

        // Add new page param and fetch cards
        params?.push({ key: 'page', value: data.page + 1 })

        cards.push(...(await fetchCards(params)))
      }

      return cards
    }

    // get cards
    const data = await fetchCards()

    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json({ error: error.message })
  }
}
