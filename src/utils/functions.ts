import type { HearthstoneCard, QueryParam } from '@/types/types'
import type { ToastServiceMethods } from 'primevue'

/**
 *
 * @param toast The primsevue toast object
 * @param detail The message to show
 */
export function errorToast(toast: ToastServiceMethods, detail: string): void {
  toast.add({ severity: 'error', summary: 'Error', detail: detail, life: 3000 })
}

export async function fetchCards(params?: QueryParam[]): Promise<HearthstoneCard[]> {
  let url = `https://eu.api.blizzard.com/hearthstone/cards?set=standard&locale=en_US&namespace=static-eu`

  params?.forEach((param) => {
    url += `&${param.key}=${param.value}`
  })

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  })

  const data = await response.json()

  return data.cards as HearthstoneCard[]
}
