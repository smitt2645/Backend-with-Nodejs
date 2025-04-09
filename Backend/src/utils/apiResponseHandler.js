class apiResponse {
    constructor(
        message = "Success",
        statusCode = 200,
        status = "Ok",
        data = null
    ){
        this.message = message ,
        this.statusCode = statusCode 
        this.data = data
    }
    
}

export {apiResponse}