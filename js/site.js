$(function() {
	VideoJS.setupAllWhenReady();
	var getVars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		getVars.push(hash[0]);
		getVars[hash[0]] = hash[1];
	}
	if(getVars.action != '') {
		if($('section#messages section#' + getVars.action).length > 0) {
			$('section#messages section#' + getVars.action).slideDown();
		}
	}
	$('button#enroll').click(function() {
		location.href = "http://usefulhtml.eventbrite.com";
	});
});