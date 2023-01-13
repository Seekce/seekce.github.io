ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
        if( flags.broadcaster && command === "test" ) {
          console.log( "!test was typed in chat" );
        }
      }
      ComfyJS.Init( "Seekce" );
	  
ComfyJS.onChat = ( user, message, flags, self, extra) => {
	var chat = document.querySelector("#chat>ul");
	
	var newBox = document.createElement("li");
	var userDiv = document.createElement("div");
	var messageDiv = document.createElement("div");
	var bottomBorder = document.createElement('div');
	
	userDiv.innerText = user;
	userDiv.classList.add("user");
	messageDiv.innerText = message;
	messageDiv.classList.add("message");
	bottomBorder.classList.add("bottomborder")
	
	newBox.append(userDiv);
	newBox.append(messageDiv);
	newBox.append(bottomBorder);
	chat.append(newBox);
}