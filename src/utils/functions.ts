import type { ToastServiceMethods } from 'primevue'

/**
 *
 * @param toast The primsevue toast object
 * @param detail The message to show
 */
export function errorToast(toast: ToastServiceMethods, detail: string): void {
  toast.add({ severity: 'error', summary: 'Error', detail: detail, life: 3000 })
}
