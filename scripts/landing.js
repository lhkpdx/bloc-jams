 //Replace the for loop in the animatePoints function //with a forEach block and confirm that the selling //points still animate properly.

//     function forEach(pointsArray, callback) {
//    for (var i = 0; i < pointsArray.length; i++) {
//        callback(pointsArray[i]);

var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(x) {
      x.style.opacity = 1;
      x.style.transform = "scaleX(1) translateY(0)";
      x.style.msTransform = "scaleX(1) translateY(0)";
      x.style.WebkitTransform = "scaleX(1) translateY(0)";
    };    

var animatePoints = function(pointToAnimate) {
   forEach(pointToAnimate, revealPoint);     
   };
     


window.onload = function() {
    if(window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
 }
