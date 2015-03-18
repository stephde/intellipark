/*** entries should look like
 * {
     x: 1,
     y: 1,
     status: "occupiedSpace", "free", "reserved"
 }
 */
var parkingModel = [];
var userCoordinates;
var hasUserFoundASpace = false;
var parkingModelChange = false;
var spaceCount = 0;


function initializeParkingModel(width, height) {
    userCoordinates = [1, height];
    setInterval(updateParkingGrid, 5000);
    parkingModel = [width];
    for (var i = 0; i < width; i++) {
        parkingModel[i] = [];
        for (var j = 0; j < height; j++) {
            if (j % 2 === 0)
                if(Math.random() > 0.5)
                    parkingModel[i].push({
                        status: "occupiedSpace"
                    });
                else
                    parkingModel[i].push({
                        status: "freeSpace"
                    });
            else
                parkingModel[i].push({
                    status: "roadSpace"
                });
        }
    }

    reserveSlot(getBestParkingSlot());
    updateParkingGrid();
}

function getStatus(x, y) {
    return parkingModel[x][y].status;
}

function getBestParkingSlot() {
    for (var i = 0; i < parkingModel.length; i++) {
        for(var j=0; j < parkingModel[i].length; j++){
            if (getStatus(i, j) === "freeSpace") {
                return [i, j];
            }
        }
    }
}

function updateParkingGrid() {
    //update the html grid
    //clear the old grid
    $('#parkingTable tr').remove();
    for (var i = 0; i < rows; i++) {
        //add a row
        $("#parkingTable tbody").append("<tr></tr>");
        for (var j = 0; j < cols; j++) {
            //add a column in the row
            //set the class according to the parkingModel
            if(j == userCoordinates[0] && i == userCoordinates[1])
                $("#parkingTable tr:last-child").append("<td class='userSpace' onclick = 'reserveSlot(" + i + ',' + j + ")'></td>");
            else
                $("#parkingTable tr:last-child").append("<td class='" + getStatus(i, j) + "' onclick = 'reserveSlot(" + i + ',' + j + ")'></td>");
            
        }
    }
    
    //update available spaces
    countSpaces();
    $("#spaceCount").text("Available Spaces: " + spaceCount);

    //see whether user has found a space
    if(hasUserFoundASpace)        
       $(location).attr("href", "endScreen.html");
}

function reserveSlot(spot){
    console.info(spot[0]+","+ spot[1]);
    if(parkingModel[spot[0]][spot[1]].status == "freeSpace" && parkingModel[spot[0]][spot[1]].status != "roadSpace"){
        parkingModel[spot[0]][spot[1]].status = "reservedSpace";
    }
}

function countSpaces() {
    spaceCount = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (getStatus(i, j) == "freeSpace")
                spaceCount++;
        }
    }
}

