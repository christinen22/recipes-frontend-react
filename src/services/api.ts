import axios from "axios";
import { IRecipe, IRecipesResponse } from "../types";

export const baseUrl = 'https://christinensapi.com'

/** 
 * Get Recipes
 */

export const getRecipes = async (query: string, page: number): Promise<IRecipesResponse> => {
    const res = await axios.get(`${baseUrl}/recipes/?search=${query}&page=${page}`);

    return res.data.data;
};

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

export const getRecipesByCategory = async (categoryId: number, page: number = 1) => {
    const res = await axios.get(`${baseUrl}/categories/${categoryId}`)

    return res.data
}

/**
 * Create new recipe
 */

export const createRecipe = async (formData: FormData): Promise<IRecipe> => {
    const res = await axios.post(`${baseUrl}/recipes`, formData);
    return res.data;
};