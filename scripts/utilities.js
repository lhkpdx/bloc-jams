//loops through each element in points array
//executes a callback for each element

function forEach(pointsArray, callback) {
    for (var i = 0; i < pointsArray.length; i++) {
        callback(pointsArray[i]);
    }
  };

//var pointsArray = //document.getElementsByClassName('point');