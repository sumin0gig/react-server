// express server 만들기
const express= require('express');
const cors= require('cors');

// 서버 생성 express() 호출
const app= express();
// process 주소 포트번호 지정
const port= 8080;
// json 형식의 데이터를 처리할 수 있도록 설정
app.use(express.json());
// 브라우저의 cors이슈를 막기 위해 사용하는 코드
app.use(cors());

// my sql 부르기
const mysql= require("mysql");
// 연결선 만들기
const conn= mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"1234",
	database:"shopping"
})
// 연결하기
conn.connect();

// get 요청시 응답 app.get(경로, 콜백함수)
app.get('/products',(req,res)=>{
	conn.query('SELECT * FROM products',function(err,result,fields){
		res.send(result);
	})
})
app.get("/products/:id",(req,res)=>{
	const params= req.params
	const {id}= params
	res.send(`id는 ${id}이다.`);
})
// 서버를 구동
app.listen(port,()=>{
	console.log('서버가 작동중...');
})