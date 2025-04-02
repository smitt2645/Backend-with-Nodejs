// common wrapper for handling api error , some common repeated things we can define here !
class apiError extends Error {
    constructor(
      statusCode = false,
      message = "Something went wrong!",
      errors = [],    
      stack, 
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message,
        this.errors = errors
        //  if we have instace from api that err.stack so it will return!
       if(stack){
        this.stack = stack
       }
        else if(Error.captureStackTrace){
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {apiError}