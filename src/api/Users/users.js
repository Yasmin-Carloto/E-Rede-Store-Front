import axios from 'axios'

const baseUrl = 'http://localhost:3666/users'
const Axios = axios.create({
    baseURL: baseUrl,
    timeout: 3000,

})

async function createUser(name, email, password){
    const payload = {
        name: name,
        email: email,
        password: password
    }

    try{
        const { data } = await Axios.post(
            '/', payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return data
    } catch (error){
        console.log(error)
        return error.response.data
    }
}

export {
    createUser
}