window.addEventListener('load', function() {
	var checkJSInit = setInterval(function(){

		// HACK: poll until messages are rendered
		if(document.querySelectorAll('._1t_p').length > 0) {
			clearInterval(checkJSInit);
			
			renderMyName();

			var container = document.querySelector('._4bl9 ._4u-c._1wfr .uiScrollableAreaWrap');
			container.addEventListener('scroll', function() {
				
				// add new elements when new messages are loaded
				if(container.scrollTop === 0) {
					var messagesCount = document.querySelectorAll('._1t_p').length;
					
					// HACK: poll until new messages are rendered
					var pollUntilMessageLoaded = setInterval(function(){
						if(messagesCount !== document.querySelectorAll('._1t_p').length){
							renderMyName();
						}

					}, 100);
				}
			});
		}
			}, 100);
});

function renderMyName() {
	var messageBoxes = document.querySelectorAll('._1t_p');
	for(var i=0; i < messageBoxes.length; i++){
		var children = messageBoxes[i].children;

		// it's only one if the message container <li> is by me
		if(children.length === 1) {
			var myNameDiv = document.createElement('div');
			myNameDiv.className = "_ih3 myName";
			messageBoxes[i].appendChild(myNameDiv);
			messageBoxes[i].insertBefore(myNameDiv, messageBoxes[i].firstChild);

			var myNameSpan = document.createElement('span');
			myNameSpan.className = "_3oh-";
			myNameSpan.innerHTML = "Me";
			myNameDiv.appendChild(myNameSpan);
		}
	}
}