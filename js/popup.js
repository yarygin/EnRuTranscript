$(document).ready(function(){
    chrome.contextMenus.create({
        title: "Red",
        contexts: [ "selection" ],
        onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "console.log(" + info.selectionText + ");googleMarker.markUrl('" + info.linkUrl + "', 'red')"
            });
        }
    });
	
});