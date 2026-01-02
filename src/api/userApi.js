import {$authHost, $host} from "./index";


export const registration = async (target) => {
    try {
        const {data} = await $host.post('api/registration/', target)
        return data
    } catch(error) {
        console.log(error)
        return {error: error};
    }
}

export const login = async (target) => {
    try {
        const {data} = await $host.post('api/login/', target)
        return data
    } catch(error) {
        console.log(error)
        return {error: error};
    }
}

export const logout = async () => {
    try {
        await $authHost.post('api/logout/')
    } catch(error) {
        console.log(error)
    }
}

export const refresh = async () => {
    try {
        const {data} = await $authHost.post('api/refresh/')
        return data
    } catch(error) {
        console.log(error)
    }
}

export const getUser = async () => {
    try {
        const {data} = await $authHost.get('api/current/')
        return data
    } catch(error) {
        console.log(error)
    }
}

export const updateUser = async (target) => {
    try {
        const {data} = await $authHost.patch('api/current/', target)
        return data
    } catch(error) {
        console.log(error)
        return {error: error};
    }
}