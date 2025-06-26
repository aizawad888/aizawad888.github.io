
// 各ボタンの要素を取得
const btn1 = document.getElementById("btn1");
// 画像の要素を取得
const img = document.getElementById("img1");

const defaultImage = "prof04-1_02.png"; 
const newImage = "prof04-2.png";
let isDefault = true;

btn1.addEventListener("click",function(){
  img.style.transform = "rotateY(90deg)";

  setTimeout(() => {
    if (isDefault){
      img.src = newImage;
    }else{
      img.src = defaultImage;
    }
    img.style.transform = "rotateY(0deg)";
    isDefault = !isDefault;
  }, 500);
});



