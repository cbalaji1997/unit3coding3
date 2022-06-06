
var signup =JSON.parse(localStorage.getItem("user"))||[]
document.querySelector("#form").addEventListener("submit",formsub)


function formsub(event){
    event.preventDefault()

    var signinObj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        address:document.querySelector("#address").value,
        amount:document.querySelector("#amount").value
    }

signup.push(signinObj)
console.log("signup")
localStorage.setItem("user",JSON.stringify(signup))
}
