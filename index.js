const http=require('http');
const PORT=3000;

// request-> all details about incoming request
// response -> it contain function using which we can prepare response

// createrServer return server object
const server=http.createServer( function exec(request,response){
   console.log(request);
 // response.end('hello world');
 
 if(request.url=='/home'){
    response.end("Welcome to Home");
 }else if(request.url=='/faq'){
    console.log("List Of Faqs");
 }else{
    console.log("hello world");
 }
}
);

// to run my server, Use listen

server.listen(PORT, function process(){
  // once server started this callback fn will run
  console.log("Server started on port", PORT);
});
