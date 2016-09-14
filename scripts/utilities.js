//loops through each element in points array
//executes a callback for each element

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
  };

//var pointsArray = //document.getElementsByClassName('point');