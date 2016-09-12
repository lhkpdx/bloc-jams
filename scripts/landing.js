var animatePoints = function() {
var points = document.getElementsByClassName("point");

    var revealPoint = function(x) {
      points[x].style.opacity = 1;
      points[x].style.transform = "scaleX(1) translateY(0)";
      points[x].style.msTransform = "scaleX(1) translateY(0)";
      points[x].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
        for (var i = 0; i < points.length; i++) {
            revealPoint(i);
        }
};

    

    
    
    
    
    