module.exports = (app) =>{
    app.get ('/registro',(req,res)=>{
        res.render('registros.ejs')
    })
}