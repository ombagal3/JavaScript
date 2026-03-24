const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const btn_3 = document.getElementById("btn-3");
const btn_4 = document.getElementById("btn-4");
const btn_5 = document.getElementById("btn-5");
const btn_6 = document.getElementById("btn-6");
const count = document.getElementById("count");





btn_1.addEventListener("click", () => {
count.textContent ++;

});

btn_2.addEventListener("click",()=>{
count.textContent --;
});

btn_3.addEventListener("click",()=>{
count.textContent *= 2 ;
});

btn_4.addEventListener("click",()=>{
    count.textContent = 0;
})

btn_5.addEventListener("click",()=>{

    count.textContent %=2;  
});
btn_6.addEventListener("click",()=>{

    count.textContent /=2;  
});


const name_in = document.getElementById("name-in");
const find = document.getElementById("find");


find.addEventListener("click", () => {

const ans = name_in.value;
alert(ans);

})

const bg_btn = document.getElementById("bg-btn")

bg_btn[0].addEventListener("click", ()=>{
const str = Math.floor(Math.random() * 16581375).toString(16);

document.body.style.backgroundColor = "#" + str;
bg_btn[0].textContent = str;

});