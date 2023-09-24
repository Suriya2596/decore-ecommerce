// handleerror 
const errorHandle = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        status:"fail",
        message:err?.message,
        stack:err?.stack,
    })
}

module.exports = errorHandle