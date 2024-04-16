export interface searchMetaType {
    total_count: number
    pageable_count: number
    is_end: boolean
}

export interface searchDocumentType {
    title: string
    contents: string
    url: string
    isbn: string
    datetime: string
    authors: string[]
    publisher: string
    translators: string[]
    price: number
    sale_price: number
    thumbnail: string
    status: string
}
