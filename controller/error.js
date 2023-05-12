
// if error occur
const checkError = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.render("404", { pageTitle: "Page Not Found" });
};
module.exports = { checkError };




































// // ///////////////////////////////////
// // function show(data) {
// //     console.log(data)
// // }
// // function multipy(num1,num2){
// //     const mul=num1*num2;
// //     return mul;
// // }
// // const result=multipy(5,10);
// // show(result);

// // ///////////////////////////////////
// function show(data) {
//     console.log(data)
// }
// function multipy(num1,num2){
//     const mul=num1*num2;
//     show(mul);
// }
// multipy(5,10);


// // // ///////////////////////////
// // function show(data) {
// //     console.log(data) //50
// // }
// // function multipy(num1,num2,myCallback){
// //     const mul=num1*num2;
// //     myCallback(mul);
// // }
// // multipy(5,10,show);

// // // ///////////////////////
// // setTimeout(() => {
// //   console.log("timeout");
// // }, 2000);
// // function x(y) {
// //   console.log("x");
// //   y();
// // }
// // x(function y() {
// //   console.log("y");
// // });
// // // x
// // // y
// // // timeout

// // document.queryselector("#btn")
// //     .addEventListener("click", function() {    
// //       console.log("clicked on the button!");
// // });


// // We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function)
// // from running until they're completed,
// //  as you're probably used to. Instead, it will execute in the background while the rest of the code runs
