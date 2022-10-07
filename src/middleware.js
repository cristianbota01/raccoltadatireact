class Middleware {
    static SendRequest = async (data, method, page) => {
        let response = await fetch("http://localhost:4000/" + page, {
            method: method, body: new URLSearchParams({...data}), headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        return response.json()
    }
}

export default Middleware