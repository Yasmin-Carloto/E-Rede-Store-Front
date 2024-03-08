import axios from 'axios'

const baseUrl = 'http://localhost:3666/orders'
const Axios = axios.create({
    baseURL: baseUrl,
    timeout: 3000,

})

async function placeOrder(orders, authToken){
    const payload = {
        orders: orders
    }

    try{
        const {data} = await Axios.post(
            '/', payload,{
                headers: {
                    "Authorization": "Bearer " + authToken,
                    "Content-Type": "application/json"
                }
            }
        )
        return data
    } catch (error){
        return error.response.data
    }
}

async function getOrders(authToken){
    try{
        const {data} = await Axios.get(
            '/',{
                headers: {
                    "Authorization": "Bearer " + authToken,
                }
            }
        )
        console.log(data)
        return data
    } catch (error){
        console.log(error.message)
        return error.response.data
    }
}

export {
    placeOrder,
    getOrders
}