export default function regUser () {

    const [name, lastName, age, phone, email, password, button]
       = ['name', 'lastName', 'age','phone', 'email', 'password', 'button']
       .map(item => document.getElementById(item))
    
       name.onchange = event => {
           if(event.target.value.length < 1){
               alert('Мало символов')
           } else{
               event.target.style.color = 'green'
           }
       }
    
       lastName.onchange = event => {
           if(event.target.value.length < 2){
               alert('Мало символов')
           } else {
               event.target.style.color = 'green'
           } 
       }
    
       age.onchange = event => {
           if(event.target.value <= 0) {
               alert('Число должно быть положительным')
           } else {
               event.target.style.color = 'green'
           }
       }
    
       phone.onchange = event => {
           if(event.target.value.length < 9){
               alert('Мало символов')
           } else {
               event.target.style.color = 'green'
           }
       }
    
       email.onchange = event => {
           if(event.target.value.length < 10){
               alert('Мало символов')
           } else {
               event.target.style.color = 'green'
           } 
       }
    
       password.onchange = event => {
           if(event.target.value.length < 5){
               alert('Мало символов')
           } else {
               event.target.style.color = 'green'
           }
       }
    
    }
    regUser()

    
