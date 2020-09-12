var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({
  host     : 'localhost', //서버위치. node.js와 mysql의 서버가 같은 컴퓨터에 있을 땐 localhost
  user     : 'root', //db계정
  password : '111111',
  database : 'opentutorials' //mysql> use <database name>과 같은 역할
});
  
connection.connect(); //접속
  
connection.query('SELECT * FROM topic', function (error, results, fields) { //
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();