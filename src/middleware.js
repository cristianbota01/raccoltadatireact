class Middleware{
    static SendRequest = async (data, method, page) => {
        let response = await fetch("localhost/" + page, {method:method, body:data, credentials:"include"})
        return response.json()
    }
}

export default Middleware