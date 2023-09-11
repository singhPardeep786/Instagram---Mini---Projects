
var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#addfriend");

// var removeFriend = document.querySelector("#remove");

var check = 0

addFriend.addEventListener("click", function(){

    if (check == 0) {    
        istatus.innerHTML = "Friends!!";
        istatus.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        addFriend.style.backgroundColor = "#463234";
        check = 1
    }else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "brown";
        addFriend.innerHTML = "Add Friend";
        addFriend.style.backgroundColor = "brown";
        check = 0
    }
})

// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "brown";
// })