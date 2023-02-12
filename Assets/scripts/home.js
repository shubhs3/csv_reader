

function deleteFile(file) {
	$.ajax({
		url: `file/delete/${file}`,
		type: "DELETE",
		success: function (res) {
			alert("File deleted successfully!");
			window.location.href = "/";
		},
		error: function (res) {
			alert(res.responseText);
		},
	});
}
