export default function appUser () {
    const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'usersdb',
    password: 'root',
    port:'3306'
})


connection.connect( err => {
  if(err){
      return console.log('Error' + err.message)
  }else{
      console.log('Подключение к сереверу MySQL установлено')
  }
})

connection.query('SELECT * FROM users', (err, results, fields) => {
    console.log(err)
    console.log(results)
    console.log(fields)
})


connection.end(err =>{
    if(err) {
        return console.log('Error'+ err.message)
    }else{
        console.log('Подключение закрыта')
    }
  })

}
appUser()