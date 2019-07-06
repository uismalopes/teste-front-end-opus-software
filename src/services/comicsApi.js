import axios from 'axios'

const url = 'https://gateway.marvel.com/v1/public/'
const apiKey = 'abbc1c0257fbf4452a9bea029f3b0259'

export default{
    getApi: (id,callback)=>{
        // const mountUrl = `${url}comics?limit=100&apikey=${apiKey}`
        const mountUrl = `${url}comics/${id}?apikey=${apiKey}`;
            axios.get(mountUrl).then(res=>{
                if(callback)callback(res)
        })
    },
    getSeries: (id,callback)=>{
        // const mountUrl = `${url}series?apikey=${apiKey}`
        const mountUrl = `${url}series/${id}?apikey=${apiKey}`
        axios.get(mountUrl).then(res=>{
            if(callback) callback(res)
        })
    }
}