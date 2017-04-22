// Load the options page on install.
chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.openOptionsPage();
});

// Function to add children to a parent Context Menu.
function refreshContextMenu() {
    chrome.contextMenus.removeAll();
    createMainMenu();
    addChildrenToContextMenu();
}

function addChildToContextMenu(title, bang, parentMenu = 'duckduckgo') {
    chrome.contextMenus.create({
        id: title.replace(' ', '').toLowerCase(),
        title: title,
        contexts: ['selection'],
        'parentId': parentMenu,
        onclick: function(info, tab) {
            const queryText = info.selectionText;
            chrome.tabs.create({
                'url': 'https://duckduckgo.com/?q=' + queryText + ' ' + bang,
                'index': tab.index + 1,
                'active': true
            });
        }
    });
}


//This adds Context Menu when user select some text.
function createMainMenu() {
    chrome.contextMenus.create({
        id: 'duckduckgo',
        title: 'Search "%s" on:',
        contexts: ['selection']
    });
}


// Add children when set in options.
function addChildrenToContextMenu() {
    chrome.storage.local.get(null, function(items) {

        if (items.duckDuckGoLink === true) {
            addChildToContextMenu('DuckDuckGo', '');
        }
        if (items.googleLink === true) {
            addChildToContextMenu('Google', '!g');
        }
        if (items.youtubeLink === true) {
            addChildToContextMenu('Youtube', '!yt');
        }
        if (items.googleImagesLink === true) {
            addChildToContextMenu('Google Images', '!gi');
        }
        if (items.googleMapsLink === true) {
            addChildToContextMenu('Google Maps', '!gm');
        }
        if (items.googleTranslateLink === true) {
            addChildToContextMenu('Google Translate', '!tr');
        }
        if (items.dictionaryLink === true) {
            addChildToContextMenu('Dictionary.com', '!di');
        }
        if (items.googleNewsLink === true) {
            addChildToContextMenu('Google News', '!gn');
        }
        if (items.hackerNewsLink === true) {
            addChildToContextMenu('Hacker News', '!hn');
        }
        if (items.facebookLink === true) {
            addChildToContextMenu('Facebook', '!fb');
        }
        if (items.twitterLink === true) {
            addChildToContextMenu('Twitter', '!tw');
        }
        if (items.wikipediaLink === true) {
            addChildToContextMenu('Wikipedia', '!wi');
        }
        if (items.imdLink === true) {
            addChildToContextMenu('IMDb', '!imd');
        }
        if (items.bingLink === true) {
            addChildToContextMenu('Bing', '!b');
        }
        if (items.githubLink === true) {
            addChildToContextMenu('GitHub', '!git');
        }
        if (items.stackOverflowLink === true) {
            addChildToContextMenu('StackOverflow', '!so');
        }
        if (items.redditLink === true) {
            addChildToContextMenu('Reddit', '!r');
        }
        if (items.amazonLink === true) {
            addChildToContextMenu('Amazon', '!a');
        }
        if (items.piratebayLink === true) {
            addChildToContextMenu('Piratebay', '!piratebay');
        }
        if (items.avaxhomeLink === true) {
            addChildToContextMenu('AvaxHome', '!avax');
        }
        if (items.rarbgLink === true) {
            addChildToContextMenu('RaRBG', '!rarbg');
        }
    });
}

chrome.storage.onChanged.addListener(function (){
    refreshContextMenu();
});

chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.tabs.query({
        'currentWindow': true,
        'active': true
    }, function(tabs) {
        chrome.tabs.update(tabs[0].id, {
            url: 'https://duckduckgo.com/?q=' + encodeURIComponent(text)
        });
    });
});
