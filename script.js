let userImage = document.querySelector(".user-result img");
let playerImage = document.querySelector(".cpu-result img");
let options = document.querySelectorAll(".option-image img")
let result = document.querySelector(".result")
// console.log(userImage);
// console.log(playerImage);
// console.log(options);

// option of user and computer
let userSelet 
let computerSelect

options.forEach(function(option){
    option.addEventListener("click",function(e){
        result.textContent = "Loadding..."
        setTimeout(function(){
            RandomImage();
            userImage.src = e.target.src
            result.textContent = ""
            if(e.target.classList.contains("rock")){
               userSelet = "rock";
             }else if(e.target.classList.contains("paper")){
               userSelet = "paper";
             }else{
                userSelet = "cut";
             }
        },3000)

        setTimeout(function(){
            if(userSelet == computerSelect){
                result.textContent = "Equal😐😐"
            }else if(userSelet == "rock" && computerSelect == "cut"){
                result.textContent = "You Win!!🤗🤗"
            }else if(userSelet == "cut" && computerSelect == "rock"){
                result.textContent = "You Lose😛😛"
            }else if(userSelet == "paper" && computerSelect == "cut"){
                result.textContent = "You Lose😛😛";
            }else if(userSelet == "cut" && computerSelect == "paper"){
                result.textContent = "You Win!!🤗🤗";
            }else if(userSelet == "rock" && computerSelect == "paper"){
                result.textContent = "You Lose😛😛"
            }else if(userSelet == "paper" && computerSelect == "rock"){
                result.textContent = "You Win!!🤗🤗"
            }
        },3000)
    })
})
// Random choose of computer
function RandomImage(){
    let random = options[Math.floor(Math.random() * options.length)]
     playerImage.src = random.src

     if(random.classList.contains("rock")){
       computerSelect = "rock";
     }else if(random.classList.contains("paper")){
        computerSelect = "paper";
     }else{
        computerSelect = "cut";
     }
}