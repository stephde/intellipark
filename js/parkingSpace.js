//takes the data in json format creates an appropriate table then applies a
var rows = 10;
var cols = 9;
//create a table of size from the json

initializeParkingModel(rows, cols);

updateParkingGrid();

function switchView(){
	$("#detailPerspective").toggleClass("inactive");
	$("#overviewPerspective").toggleClass("inactive");
	$("#overviewMap").toggleClass("inactive");
}

