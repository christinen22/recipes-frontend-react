import axios from "axios";
import { IRecipe, ICategory, IRecipeResponse } from "../types";

export const baseUrl = 'http://127.0.0.1:8000/'

/** 
 * Get Recipes
 */

export const getRecipes = async () => {
    const res = await axios.get(`${baseUrl}/recipes`)

    return res.data
}

/**
 * Get single recipe
 */

export const getRecipe = async (id: number) => {
    const res = await axios.get(`${baseUrl}/recipes/${id}`)

    return res.data
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