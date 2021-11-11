var running = false;
	console.log(running);
	window.setInterval(sendData,120000);  

	function sendData(){
		console.log("attempting to send data...");
		if (running == true){
			axios.post('https://sheetdb.io/api/v1/a2p84tz3nd0mb?sheet='+roomNum,
					  {"data":{"studentID":studentID}
			  }).then(response => {
			console.log("data sent!");
				console.log(response);
			})
		}
		else{
			console.log("no data to send. failure");
		}
	}
	function submitForm(){
		var studentID = document.getElementById("student_id").value;
		var roomNum = document.getElementById("room_number").value;

		if (studentID != null && roomNum != null){
			running = true;
		}

		console.log("form submitted!");
	}
