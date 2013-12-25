function onClickContextMenu(info, tab) {
    chrome.tabs.executeScript({
		file: 'js/main.js'
	});
}

chrome.contextMenus.create({
	title: "Сменить раскладку",
	contexts: [ "selection" ],
	onclick: onClickContextMenu
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	onClickContextMenu(null,tab);
});