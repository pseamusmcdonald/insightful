import { writable } from "svelte/store"

export const theme = writable()

if (typeof localStorage !== 'undefined') {
	const storedTheme = localStorage.getItem("theme")
	theme.set(storedTheme || 'dark')
	theme.subscribe(value => {
    localStorage.setItem("theme", value === 'light' ? 'light' : 'dark')
	})
}
