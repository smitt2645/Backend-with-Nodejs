// here we have asyncHandler fucntion that accept a funtion and return callback
// export const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     req
//       .status(error.code || 500)
//       .json({ success: false, message: `error ${error}` });
//   }
// };

export const asyncHandler =  (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve().then(async ()=> await requestHandler(req,res,next)).catch((err)=> next(err))
    }
}

export {asyncHandler}