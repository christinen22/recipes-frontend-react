import axios from "axios";
import { IRecipe, ICategory, IRecipesResponse, IFormData } from "../types";

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
 * Get recipe per category
 */

export const getRecipesByCategory = async (id: number) => {
    const res = await axios.get(`${baseUrl}/categories/${id}`)

    return res.data
}

/**
 * Create new recipe
 */

export const createRecipe = async (formData: FormData): Promise<IRecipe> => {
    const res = await axios.post(`${baseUrl}/recipes`, formData);
    return res.data;
};