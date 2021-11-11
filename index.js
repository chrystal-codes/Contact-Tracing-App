var intervalID;
var running = false;
console.log(running);

document.getElemntById("submit-form").addEventListener("click",submitForm);

/*function createStopBtn(){
	var stopBtn = document.createElement("button");
	stopBtn.innerText = "STOP";
	document.getElementById("sheetdb-form").appendChild(stopBtn);
	stopBtn.addEventListener("click",clearInterval(intervalId));
}*/

function sendData(roomNum,StudentID){
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
		console.log("form submitted!");
		sendData(roomNum,studentID);
		//createStopBtn();
		window.setInterval(sendData,60000,roomNum,studentID); 
	}
	else {
		console.log("data could not be sent");
	}

	 
}
