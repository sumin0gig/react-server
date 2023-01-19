// node는 Common JS 기반으로 한다.
// 불러올때 require를 사용한다
const http= require('http');

const hostname= "127.0.0.1"; // 컴퓨터 주소
const port= 8080; // post num

// create server() : 서버 생성
// 요청정보=req 응답정보=res
const server= http.createServer(function(req,res){
	// console.log("요청 : ", req);
	// res.end("Hello Clinet");
	const path= req.url;
	const method= req.method;
	if(path=="/products"){
		// 응답을 보낼 때 json 객체를 보낸다
		res.writeHead(200,{'Content-type':'application/json'});
		// JSON.stringify(obj) => 객체를 json으로 변환
		const product = JSON.stringify({
			name: "기초 화장품",
			price: 50000
		})
		res.end(product);
	}else {
		res.end("허허허");
	}
})
// http://localhost:8080/ 요청

//  listen는 대기 호스트네임과 포트번호 요청을 기다린다.
server.listen(port,hostname);
console.log("화장품 서버가 동작 중입니다.");