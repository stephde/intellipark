/*** entries should look like
 * {
     x: 1,
     y: 1,
     status: "occupiedSpace", "free", "reserved"
 }
 */
 
var parkingModel = [];

function initializeParkingModel(width, height) {
    parkingModel = [width];
    for(var i=0; i < width; i++){
        parkingModel[i] = [];
        for(var j=0; j < height; j++){
            if(j % 2 == 0)
                parkingModel[i].push({ 
                    status: "freeSpace"
                });
            else
                parkingModel[i].push({ 
                    status: "roadSpace"
                });

        }
    }
}

function getStatus(x, y){
    return parkingModel[x][y].status;
}

function getBestParkingSlot(){
    for(var i=0; i<parkingModel.length; i++){
        if(isFree(i)){
            return i;
        }
    }
}