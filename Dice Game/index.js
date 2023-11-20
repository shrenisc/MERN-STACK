var num1=Math.floor(Math.random() * 6) + 1;
var num2=Math.floor(Math.random() * 6) + 1;
console.log(num1,num2)
document.querySelector('.img1').setAttribute('src',"./images/"+"dice"+String(num1)+".png")
document.querySelector('.img2').setAttribute('src',"./images/"+"dice"+String(num2)+".png")
if (num1>num2) {
    document.querySelector('h1').innerHTML="Player 1 Wins!"
}
else{
    document.querySelector('h1').innerHTML="Player 2 Wins!"
}