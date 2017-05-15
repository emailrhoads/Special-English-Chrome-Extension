// Called when the user clicks on the browser action.
//chrome.browserAction.onClicked.addListener(function(tab) {
//  // No tabs or host permissions needed!
//  console.log('Turning ' + tab.url + ' red!');
//  chrome.tabs.executeScript({
//    code: 'document.body.style.backgroundColor="red"'
//  });
//});

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
	// send a message specifying a callback too
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});