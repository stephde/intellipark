//takes the data in json format creates an appropriate table then applies a
var rows = 10;
var cols = 10;
//create a table of size from the json

var mapdata = {

}

for (var i = 0; i < rows; i++){
	$("#parkingTable tbody").append("<tr></tr>");
	for(var j = 0; j < cols; j++){
		$("#parkingTable tr:last-child").append("<td class='freeSpace'></td>");
	}
	
}