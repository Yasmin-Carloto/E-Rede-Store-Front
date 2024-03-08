import axios from 'axios'

const baseUrl = 'http://localhost:3666/products'
const Axios = axios.create({
    baseURL: baseUrl,
    timeout: 3000,

})

async function getProductsByCategory(category){
    try{
        const {data} = await Axios.get(
            '/categories',{
                params: {
                    q: category
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return data
    } catch (error){
        return error.response.data
    }
}

async function getProducts(){
    try{
        const {data} = await Axios.get(
            '/',{
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return data
    } catch (error){
        return error.response.data
    }
}

export {
    getProductsByCategory,
    getProducts
}