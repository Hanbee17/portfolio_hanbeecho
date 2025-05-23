window.onload = choosePic;

var myPix = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg', 'p8.jpg', 'p10.jpg','p13.png'];

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = "photo_assets/" + myPix[randomNum];
   }


   