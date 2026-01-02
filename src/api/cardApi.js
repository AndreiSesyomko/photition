import {$authHost} from "./index";
import photo from "../components/Photo";

export const vote = async (photo) => {
    try {
        await $authHost.post(`api/photos/${photo}/vote/`)
    }
    catch (error) {
        console.log(error)
    }
}

export const comment = async (photo, comment) => {
    try {
        const {data} = await $authHost.post(`api/photos/${photo}/comment/`, comment)
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const createPhoto = async (photo) => {
    try {
        const {data} = await $authHost.post(`api/photos/create/`, photo)
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteComment = async (comment) => {
    try {
        await $authHost.delete(`api/photos/comment/delete/${comment}/`)
    }
    catch (error) {
        console.log(error)
        return {error: error};
    }
}

export const deletePhoto = async (photo) => {
    try {
        await $authHost.delete(`api/photos/${photo}/delete/`)
    }
    catch (error) {
        console.log(error)
        return {error: error};
    }
}

export const getPhoto = async (photo) => {
    try {
        const {data} = await $authHost.get(`api/photos/${photo}/`)
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const getPhotoList = async (params) => {
    try {
        const searchParams = new URLSearchParams()
        for (const key in params) {
            searchParams.append(key, params[key])
        }
        const query = 'api/photos/?' + searchParams.toString()
        const {data} = await $authHost.get(`api/photos/${query}/`)
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const restorePhoto = async (photo) => {
    try {
        const {data} = await $authHost.post(`api/photos/${photo}/restore/`)
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const updatePhoto = async (photo, content) => {
    try {
        const {data} = await $authHost.patch(`api/photos/${photo}/update/`, content)
        return data
    } catch(error) {
        console.log(error)
        return {error: error};
    }
}

export const updateComment = async (comment, content) => {
    try {
        const {data} = await $authHost.patch(`api/photos/comment/update/${comment}/`, content)
        return data
    } catch(error) {
        console.log(error)
        return {error: error};
    }
}