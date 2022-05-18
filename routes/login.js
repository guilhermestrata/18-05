module.exports = (app) =>{
    //rota do tipo send
    app.get ('/login',(req,res)=>{
        res.render('login.ejs')
    })
}