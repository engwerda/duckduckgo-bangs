const searchElement = document.getElementById('search_form_input');
const linksElement = document.getElementById('links');
const styling = '.bang-btn { margin: 10px; }';

const urlBuilder = (query, bang) => {
    return 'https://duckduckgo.com/?q=' + bang + '%20' + query;
};

// Build the HTML for the button link
const linkBuilder = (query, bang, shortName, fullName) => {
    const url = urlBuilder(query, bang);
    const a = document.createElement('a');
    a.className = 'button bang-btn';
    a.href = url;

    // Set button text from option setting
    chrome.storage.local.get('buttonText', function(items) {
        if (items.buttonText === 'fullName') {
            a.textContent = fullName;
        } else if (items.buttonText === 'bang') {
            a.textContent = bang;
        } else {
            a.textContent = shortName;
        }
    });
    a.title = 'Search for "' + query + '" on ' + fullName;
    // Open link in new tab if set in options.
    chrome.storage.local.get('newTab', function(items) {
        if (items.newTab === true) {
            a.target = '_blank';
        }
    });
    return a;
};


const inject = (query) => {
    const css = document.createElement('style');
    css.type = 'text/css';
    css.textContent = styling;
    document.body.appendChild(css);

    const containerElement = linksElement.parentElement;
    chrome.storage.local.get(null, function(items) {
        if (items.googleButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!g', 'G', 'Google'), linksElement);
        }
        if (items.youtubeButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!yt', 'YT', 'Youtube'), linksElement);
        }
        if (items.googleImagesButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!gi', 'Img', 'Google Images'), linksElement);
        }
        if (items.googleMapsButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!gm', 'Maps', 'Google Maps'), linksElement);
        }
        if (items.googleTranslateButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!tr', 'Trans', 'Google Translate'), linksElement);
        }
        if (items.dictionaryButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!di', 'Dict', 'Dictionary.com'), linksElement);
        }
        if (items.googleNewsButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!gn', 'News', 'Google News'), linksElement);
        }
        if (items.wikipediaButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!w', 'Wiki', 'Wikipedia'), linksElement);
        }
        if (items.hackerNewsButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!hn', 'Hack', 'Hacker News'), linksElement);
        }
        if (items.facebookButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!fb', 'FB', 'Facebook'), linksElement);
        }
        if (items.twitterButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!tw', 'TW', 'Twitter'), linksElement);
        }
        if (items.imdButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!imd', 'IMD', 'IMDb'), linksElement);
        }
        if (items.bingButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!b', 'B', 'Bing'), linksElement);
        }
        if (items.githubButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!gh', 'GitHub', 'Github'), linksElement);
        }
        if (items.stackOverflowButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!so', 'SO', 'StackOverflow'), linksElement);
        }
        if (items.redditButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!r', 'R', 'Reddit'), linksElement);
        }
        if (items.amazonButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!a', 'A', 'Amazon'), linksElement);
        }
        if (items.piratebayButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!piratebay', 'PB', 'Piratebay'), linksElement);
        }
        if (items.avaxhomeButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!avax', 'Avax', 'AvaxHome'), linksElement);
        }
        if (items.rarbgButton === true) {
            containerElement.insertBefore(linkBuilder(query, '!rarbg', 'RaRBG', 'RaRBG'), linksElement);
        }
    });

};

if (searchElement !== null && linksElement !== null) {
    inject(searchElement.value);
}
