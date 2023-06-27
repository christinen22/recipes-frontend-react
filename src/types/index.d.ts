export interface IRecipe {
    id: number,
    title: string,
    body: string,
    image: string,
    category_id: number,
}


export interface IRecipesResponse {
    data: IRecipe[],
    current_page: number,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: null,
    to: number,
    total: number
}

export interface ICategory {
    id: number,
    name: string,
}