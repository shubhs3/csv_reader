// let stringData = document.getElementById("json-data").getAttribute("data");

// let jsonData = JSON.parse(stringData);

// function showFile() {
// 	const headers = Object.keys(jsonData[0]);
// 	let tableHeaders = "<tr>";
// 	headers.forEach(function (header) {
// 		tableHeaders += `<th>${header}</th>`;
// 	});
// 	tableHeaders += "</tr>";
// 	$("#csv-table thead").html(tableHeaders);

// 	let tableBody = "";
// 	jsonData.forEach(function (row) {
// 		tableBody += "<tr>";
// 		headers.forEach(function (header) {
// 			tableBody += `<td>${row[header]}</td>`;
// 		});
// 		tableBody += "</tr>";
// 	});
// 	$("#csv-table tbody").html(tableBody);

// 	// Initialize the DataTables plugin
// 	$("#csv-table").DataTable({
// 		searching: true,
// 		paging: true,
// 		pageLength: 10,
// 		select: true,
// 		ordering: true,
// 	});
// }

// showFile();


$("#csv-table").DataTable({
			searching: true,
			paging: true,
			pageLength: 10,
			select: true,
			ordering: true,
		});