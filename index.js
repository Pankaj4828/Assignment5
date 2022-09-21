const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==='/welcome')
    {
        res.writeHead(200,{'content-type':"text/plain"});
        res.end('welcome to Dominos!')
    }else if(req.url === '/contact'){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(
            JSON.stringify({
                phone: '18602100000', 
                  email: 'guestcaredominos@jublfood.com'
        })
        )
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("opps enter any other url")
    }
})
server.listen(8081,()=>{
    console.log("server is started in port no 8081")
})