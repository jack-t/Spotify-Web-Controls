$(document).ready(function(e) {

	function getSpotifyTabs(fn) {
		chrome.tabs.query({title: "* - Spotify"},
			function(tabs) {
				$(tabs).each(function(t) {
				fn(tabs[t]);
			});
		});
	}

	$('#prev').click(function(e) {
		getSpotifyTabs(
			function (t) {
				chrome.tabs.executeScript(t.id, { file:"./commands/prev.js" });
			}
		);
	});

	$('#pause').click(function(e) {
		getSpotifyTabs(
			function (t) {
				chrome.tabs.executeScript(t.id, { file:"./commands/toggle_pause.js" });
			}
		);
	});

	$('#fwd').click(function(e) {
		getSpotifyTabs(
			function (t) {
				chrome.tabs.executeScript(t.id, { file:"./commands/fwd.js" });
			}
		);
	});
});
