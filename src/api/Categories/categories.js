import axios from 'axios'

const baseUrl = 'http://localhost:3666/categories'
const Axios = axios.create({
    baseURL: baseUrl,
    timeout: 3000,

})

async function getCategories(){
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
    getCategories
}