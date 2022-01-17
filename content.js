// content.js
// content.js
var url = location.href;
if (url == "https://www.adultswim.com/") {
	window.history.back();
} else {
	console.log("no")
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);