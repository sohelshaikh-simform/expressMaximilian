const checkError=(req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404',{pageTitle:"Page Not Found"})
}
module.exports={checkError}