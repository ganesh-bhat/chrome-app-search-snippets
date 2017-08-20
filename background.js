chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 600,
      'height': 800
    },
	'state':'maximized'
  }, function(){
	console.log("launched");
	
  });
  
  
  
});
 chrome.commands.onCommand.addListener(function(command) {
        console.log('some Command called');
      });

