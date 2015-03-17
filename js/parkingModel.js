/*** entries should look like
 * {
     x: 1,
     y: 1,
     status: "occupied", "free", "reserved"
 }
 */
 
var parkingModel = [];

function initializeParkingModel(width, height) {
    for(var i=0; i < width; i++){
        for(var j=0; j < height; j++){
            parkingModel.push({
                x: i,
                y: j,
                status: "free"
            });
        }
    }
}

function isFree(slotId){
    if(slotId < parkingModel.length && parkingModel[slotId] === "free"){
        return true;
    }
}

function getBestParkingSlot(){
    for(var i=0; i<parkingModel.length; i++){
        if(isFree(i)){
            return i;
        }
    }
}