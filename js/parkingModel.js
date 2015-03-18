/*** entries should look like
 * {
     x: 1,
     y: 1,
     status: "occupiedSpace", "free", "reserved"
 }
 */
var userCoordinates = [1, height];
var parkingModel = [];

var parkingModelChange = false;
var spaceCount = 0;

function initializeParkingModel(width, height) {
    setInterval(updateParkingGrid, 5000);
    parkingModel = [width];
    for (var i = 0; i < width; i++) {
        parkingModel[i] = [];
        for (var j = 0; j < height; j++) {
            if (j % 2 === 0)
                parkingModel[i].push({
                    status: "freeSpace"
                });
            else
                parkingModel[i].push({
                    status: "roadSpace"
                }
                );

        }
    }
    parkingModel[userCoordinates[1]][userCoordinates[0]].status = "userSpace";
}

function getStatus(x, y) {
    return parkingModel[x][y].status;
}

function getBestParkingSlot() {
    for (var i = 0; i < parkingModel.length; i++) {
        if (isFree(i)) {
            return i;
        }
    }
}

function updateParkingGrid() {
    //update the html grid
    $('#parkingTable tr').remove();
    for (var i = 0; i < rows; i++){
        $("#parkingTable tbody").append("<tr></tr>");
        for(var j = 0; j < cols; j++){
            $("#parkingTable tr:last-child").append("<td class='"+getStatus(i,j)+"' onclick = 'reserveSlot("+i+','+j+")'></td>");
        }
    }
    parkingModel[userCoordinates[1]][userCoordinates[0]].status = "userSpace";
    //update available spaces
    countSpaces();
    $("#spaceCount").text("Available Spaces: "+spaceCount);
}

function reserveSlot(i, j){
    console.info(i+","+ j);
    if(parkingModel[i][j].status == "freeSpace" && parkingModel[i][j].status != "roadSpace"){
        parkingModel[i][j].status = "reservedSpace";
    }
}
function countSpaces(){
    spaceCount = 0;
    for (var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            if(getStatus(i,j) == "freeSpace")
                spaceCount++;
        }
    }
}