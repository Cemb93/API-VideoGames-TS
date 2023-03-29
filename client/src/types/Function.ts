export type EventChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void

export type EventSelect = (e: React.ChangeEvent<HTMLSelectElement>) => void

export type EventDeleteP = (el: string) => void

export type EventDeleteG = (el: string) => void

export type EventSubmit = (e: React.FormEvent<HTMLFormElement>) => void