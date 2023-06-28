import axios from "axios";
import { IRecipe, ICategory, IRecipesResponse, FormData } from "../types";

export const baseUrl = 'http://188.166.168.10'

/** 
 * Get Recipes
 */

export const getRecipes = async (query: string, page: number): Promise<IRecipesResponse> => {
    const res = await axios.get(`${baseUrl}/recipes/?search=${query}?page=${page}`)

    return res.data.data
}

/**
 * Get single recipe
 */

export const getRecipe = async (id: number): Promise<IRecipe> => {
    const res = await axios.get(`${baseUrl}/recipes/${id}`)

    return res.data.data
}

/**
 * Get category
 */

export const getCategories = async () => {
    const res = await axios.get(`${baseUrl}/categories`)

    return res.data
}

/**
 * Get single category
 */

export const getCategory = async (id: number) => {
    const res = await axios.get(`${baseUrl}/categories/${id}`)

    return res.data
}

/**
 * Create new recipe
 */

export const createRecipe = async (recipe: FormData): Promise<IRecipe> => {
    const res = await axios.post(`${baseUrl}/recipes`, recipe, {
        headers: {
            "Content-Type": "multipart/form-data" // Set the correct content type for FormData
        }
    });
    return res.data;
};