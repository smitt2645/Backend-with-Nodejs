class apiResponse {
    constructor(
        message = "Success",
        statusCode = 200,
        data = null
    ){
        this.message = message ,
        this.statusCode = statusCode 
        this.data = data
    }
    
}

export {apiResponse}