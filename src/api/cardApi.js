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
    }
}

export const deletePhoto = async (photo) => {
    try {
        await $authHost.delete(`api/photos/${photo}/delete/`)
    }
    catch (error) {
        console.log(error)
    }
}

export const getPhoto = async () => {
    try {

    }
    catch (error) {
        console.log(error)
    }
}

export const photoList = async () => {
    try {}
    catch (error) {
        console.log(error)
    }
}

export const restorePhoto = async () => {
    try {}
    catch (error) {
        console.log(error)
    }
}

export const updatePhoto = async () => {
    try {}
    catch (error) {
        console.log(error)
    }
}

export const updateComment = async () => {
    try {}
    catch (error) {
        console.log(error)
    }
}