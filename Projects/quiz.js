const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const signin_button = document.getElementById("signin_button");



const currentUser = {
    email : "Admin@gmail.com",
    password : "Admin@1234",

}

const signInUser = () => {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const email = email_input.value;
        const password = password_input.value;


if(emailRegex.test(email) && passwordRegex.test(password)){
    if(email == currentUser.email && password == currentUser.password){
        alert("login  !");
        signin_button.href"quiz.html"



    }else{
           alert("wrong email & password");

    }
    

} else{
        alert("invalid certical");
}



};
signin_button.addEventListener("click", signInUser);


