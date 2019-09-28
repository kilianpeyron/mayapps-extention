$('#action').click(function(){
	chrome.tabs.create({url :'https://mayapps.ga'})
});

$('#login').click(function(){
	chrome.tabs.create({url :'http://mayapps.ga/login/index'})
});