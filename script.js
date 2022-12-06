window.onload = choosePic;

var myPix = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg', 'p8.jpg'];

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = "./photos_assets/" + myPix[randomNum];
   }
