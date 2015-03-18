//takes the data in json format creates an appropriate table then applies a
var rows = 10;
var cols = 9;
//create a table of size from the json


initializeParkingModel(rows, cols);

for (var i = 0; i < rows; i++){
	$("#parkingTable tbody").append("<tr></tr>");
	for(var j = 0; j < cols; j++){
		$("#parkingTable tr:last-child").append("<td class='"+getStatus(i,j)+"' onclick = 'reserveSlot("+i+','+j+")'></td>");
	}
}

function switchView(){
	$("#detailPerspective").toggleClass("inactive")
	$("#overviewPerspective").toggleClass("inactive")
	$("#overviewMap").toggleClass("inactive")
}