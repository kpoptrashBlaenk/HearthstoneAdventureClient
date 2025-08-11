import type { Class, HearthstoneCard, QueryParam } from '@/types/types'
import type { ToastServiceMethods } from 'primevue'
import { CLASSES, RARITY_ID } from './constants'

/**
 * Create an error toast
 *
 * @param toast The primevue toast object
 * @param detail The message to show
 */
export function errorToast(toast: ToastServiceMethods, detail: string): void {
  toast.add({ severity: 'error', summary: 'Error', detail: detail, life: 3000 })
}

/**
 * Fetch all Standard Hearthstone cards from https://eu.api.blizzard.com/hearthstone/cards?set=standard&locale=en_US&namespace=static-eu
 *
 * @param params {@link QueryParam} to filter the api
 * @returns An array of {@link HearthstoneCard}
 */
export async function fetchCards(params: QueryParam[] = []): Promise<HearthstoneCard[]> {
  let url = `https://eu.api.blizzard.com/hearthstone/cards?set=standard&locale=en_US&namespace=static-eu&sort=manaCost%3Aasc%2Cname%3Aasc`
  // Create url with params
  params?.forEach((param) => {
    url += `&${param.key}=${param.value}`
  })

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  })
  const data = await response.json()
  let cards = data.cards

  // If mroe apges and this is not alst apge
  if (data.pageCount > 1 && data.pageCount > data.page) {
    // Remove last page param if there is
    if (data.page > 1) {
      params?.pop()
    }

    // Add new page param and fetch cards
    params?.push({ key: 'page', value: data.page + 1 })

    cards.push(...(await fetchCards(params)))
  }

  return data.cards as HearthstoneCard[]
}

/**
 * Use id to find class key
 *
 * @param classId Id of class
 * @returns Corresponding {@link Class}
 */
export function getClassById(classId: number): Class {
  return Object.values(CLASSES).find((cl) => cl.id === classId)!
}

/**
 * Use id to find class key
 *
 * @param rarityId Id of class
 * @returns Corresponding rarity kew
 */
export function getRarityById(rarityId: number): number {
  return Object.values(RARITY_ID).find((rarity) => rarity === rarityId)!
}

/**
 * Get the query params to filter for cards from all selected classes and neutrals
 *
 * @param classes Selected classes
 * @returns Query params for classes including enutrals
 */
export function classQueryParams(classes: Class[]): QueryParam[] {
  const params = classes.map((cl) => ({
    key: 'classId' as keyof HearthstoneCard,
    value: cl.id,
  }))

  return [...params, { key: 'classId', value: CLASSES.NEUTRAL.id }]
}

/**
 * Sorts cards by name, then rarity, then mana cost
 *
 * @param cards Cards to sort
 * @returns Sorted cards
 */
export function sortCards(cards: HearthstoneCard[]): HearthstoneCard[] {
  return cards.sort((a, b) => {
    if (a.manaCost !== b.manaCost) return a.manaCost - b.manaCost

    if (a.rarityId !== b.rarityId) return a.rarityId - b.rarityId

    return a.name.localeCompare(b.name)
  })
}
