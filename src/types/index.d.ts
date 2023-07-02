export interface IRecipe {
    id: number,
    title: string,
    ingredients: string,
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

interface ICategory {
    id: number;
    name: string;
    created_at: string;
    updated_at: string | null;
    recipes_count: number;
}

export interface IFormData {
    title: string;
    category: string;
    body: string;
    ingredients: string;
    category_id: string;
    image: File | null;
}