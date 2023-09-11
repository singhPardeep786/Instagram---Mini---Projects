
var arr = [
    {dp: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" ,story:"https://images.unsplash.com/photo-1613162850755-4685c19cb568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},

    {dp: "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2Zlc3Npb25hbHMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,story:"https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2Zlc3Npb25hbHMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},

    {dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" ,story:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},

    {dp: "https://images.unsplash.com/photo-1555421689-43cad7100750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2Zlc3Npb25hbHMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,story:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHByb2Zlc3Npb25hbHMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},

    {dp: "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" ,story:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
];

var story = document.querySelector(".story")

var clutter = "";

arr.forEach(function(elem, i){
    clutter += `<div class="story1">
    <img id="${i}" src="${elem.dp}" alt="">
</div>`
});

story.innerHTML = clutter;

story.addEventListener("click", function(data){
    document.querySelector(".full_screen").style.display = "block";
    document.querySelector(".full_screen").style.backgroundImage = `url(${arr[data.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full_screen").style.display = "none";
    }, 2000)
});