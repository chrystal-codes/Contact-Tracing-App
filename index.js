 var studentID;
  var roomNum;
  var loc;
  var running = false;

  function success(){
	  long = position.coords.longitude;
	  lat = position.coords.latitude;
	  
	  return [long,lat]
  }
  function error(){
	  console.log("Geolocation not supported in this browser");
  } 
	
  function sendData(id,room){
	if(id != null && room != null){
		axios.post('https://sheetdb.io/api/v1/a2p84tz3nd0mb?sheet=sheet1',
				  {"data":{"studentID":id,"room":room/*,"longitude":loc[0],"latitude":loc[1]*/}
		  }).then(response => {
			console.log("data sent!");
			console.log(response);
		  })
	}
  }
  function submitForm(){
  	running = true;
    
    studentID = document.getElementById("student_id").value;
    roomNum = document.getElementById("room_number").value;
	loc = navigator.geolocation.getCurrentPosition(success,error);
    
	sendData(studentID,roomNum);
    console.log("success!");
  }
  function clickBtn(){
	if(studentID.length == 6 && roomNum >= 1000 && roomNum <= 3100){
		document.getElementById("submit-form").click();	
	}	
  }
  
  document.getElementById("submit-form").addEventListener("click",submitForm);
  setInterval(clickBtn,120000);
