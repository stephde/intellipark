document.onkeydown = function(e) {
    var dy = 0,
        dx = 0;
    if (e.keyCode == '38') {
        // up arrow
        dy = 1;
        console.info("up key pressed");
    } else if (e.keyCode == '40') {
        // down arrow
        dy = -1;
    } else if (e.keyCode == '37') {
        // left arrow
        dx = -1;
    } else if (e.keyCode == '39') {
        // right arrow
        dx = 1;
    }
    //check if out of bounds
    if(!((userCoordinates[0] + dx >= cols) || (userCoordinates[0] + dx < 0) || (userCoordinates[1] - dy >= rows) || (userCoordinates[1] - dy < 0))){
    	//update user co-ords
    	userCoordinates[0] += dx;
    	userCoordinates[1] -= dy;
    	//if the user is on a free space or their reserved space change it's status to occupied
    	var stat = parkingModel[userCoordinates[1]][userCoordinates[0]].status;
    	if( stat == "freeSpace" || stat == "reservedSpace")
    		parkingModel[userCoordinates[1]][userCoordinates[0]].status = "occupiedSpace";
    }


    updateParkingGrid();
};