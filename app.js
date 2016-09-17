// Initialize Firebase
var config = {
apiKey: "AIzaSyCBs2x2mMamuqMyULkRHZPgtxFs7QiWEog",
authDomain: "employeedata-8e991.firebaseapp.com",
databaseURL: "https://employeedata-8e991.firebaseio.com",
storageBucket: "employeedata-8e991.appspot.com",
messagingSenderId: "825120353856"
};
firebase.initializeApp(config);

var database = firebase.database();
$(document).ready(function() {
	$("form").on("submit", function() {

		database.ref().push({
			name: $("#employee-name").val(),
			role: $("#employee-role").val(),
			date: $("#start-date").val(),
			rate: $("#monthly-rate").val(),
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		});
	});
	var months = 5;
	var billed = 500;
	database.ref().on("child_added", function(snapshot) {
		var row = $("<tr>");
		row.append("<td>"+snapshot.val().name);
		row.append("<td>"+snapshot.val().role);
		row.append("<td>"+snapshot.val().date);
		row.append("<td>"+months);
		row.append("<td>"+snapshot.val().rate);
		row.append("<td>"+billed);
		$("table").append(row);

	});
});
