function save_options() {

    let newTab = document.getElementById('newTab').checked;
    let buttonText = document.getElementById('buttonText').value;

    let googleButton = document.getElementById('googleButton').checked;
    let youtubeButton = document.getElementById('youtubeButton').checked;
    let googleImagesButton = document.getElementById('googleImagesButton').checked;
    let googleMapsButton = document.getElementById('googleMapsButton').checked;
    let googleTranslateButton = document.getElementById('googleTranslateButton').checked;
    let dictionaryButton = document.getElementById('dictionaryButton').checked;
    let googleNewsButton = document.getElementById('googleNewsButton').checked;
    let hackerNewsButton = document.getElementById('hackerNewsButton').checked;
    let facebookButton = document.getElementById('facebookButton').checked;
    let twitterButton = document.getElementById('twitterButton').checked;
    let wikipediaButton = document.getElementById('wikipediaButton').checked;
    let imdButton = document.getElementById('imdButton').checked;
    let bingButton = document.getElementById('bingButton').checked;
    let githubButton = document.getElementById('githubButton').checked;
    let stackOverflowButton = document.getElementById('stackOverflowButton').checked;
    let redditButton = document.getElementById('redditButton').checked;
    let amazonButton = document.getElementById('amazonButton').checked;
    let piratebayButton = document.getElementById('piratebayButton').checked;
    let avaxhomeButton = document.getElementById('avaxhomeButton').checked;
    let rarbgButton = document.getElementById('rarbgButton').checked;

    let duckDuckGoLink = document.getElementById('duckDuckGoLink').checked;
    let googleLink = document.getElementById('googleLink').checked;
    let youtubeLink = document.getElementById('youtubeLink').checked;
    let googleImagesLink = document.getElementById('googleImagesLink').checked;
    let googleMapsLink = document.getElementById('googleMapsLink').checked;
    let googleTranslateLink = document.getElementById('googleTranslateLink').checked;
    let dictionaryLink = document.getElementById('dictionaryLink').checked;
    let googleNewsLink = document.getElementById('googleNewsLink').checked;
    let hackerNewsLink = document.getElementById('hackerNewsLink').checked;
    let facebookLink = document.getElementById('facebookLink').checked;
    let twitterLink = document.getElementById('twitterLink').checked;
    let wikipediaLink = document.getElementById('wikipediaLink').checked;
    let imdLink = document.getElementById('imdLink').checked;
    let bingLink = document.getElementById('bingLink').checked;
    let githubLink = document.getElementById('githubLink').checked;
    let stackOverflowLink = document.getElementById('stackOverflowLink').checked;
    let redditLink = document.getElementById('redditLink').checked;
    let amazonLink = document.getElementById('amazonLink').checked;
    let piratebayLink = document.getElementById('piratebayLink').checked;
    let avaxhomeLink = document.getElementById('avaxhomeLink').checked;
    let rarbgLink = document.getElementById('rarbgLink').checked;

    chrome.storage.local.set({
        newTab: newTab,
        buttonText: buttonText,

        duckDuckGoLink: duckDuckGoLink,
        googleButton: googleButton,
        youtubeButton: youtubeButton,
        googleImagesButton: googleImagesButton,
        googleMapsButton: googleMapsButton,
        googleTranslateButton: googleTranslateButton,
        dictionaryButton: dictionaryButton,
        googleNewsButton: googleNewsButton,
        hackerNewsButton: hackerNewsButton,
        facebookButton: facebookButton,
        twitterButton: twitterButton,
        wikipediaButton: wikipediaButton,
        imdButton: imdButton,
        bingButton: bingButton,
        githubButton: githubButton,
        stackOverflowButton: stackOverflowButton,
        redditButton: redditButton,
        amazonButton: amazonButton,
        piratebayButton: piratebayButton,
        avaxhomeButton: avaxhomeButton,
        rarbgButton: rarbgButton,

        googleLink: googleLink,
        youtubeLink: youtubeLink,
        googleImagesLink: googleImagesLink,
        googleMapsLink: googleMapsLink,
        googleTranslateLink: googleTranslateLink,
        dictionaryLink: dictionaryLink,
        googleNewsLink: googleNewsLink,
        hackerNewsLink: hackerNewsLink,
        facebookLink: facebookLink,
        twitterLink: twitterLink,
        wikipediaLink: wikipediaLink,
        imdLink: imdLink,
        bingLink: bingLink,
        githubLink: githubLink,
        stackOverflowLink: stackOverflowLink,
        redditLink: redditLink,
        amazonLink: amazonLink,
        piratebayLink: piratebayLink,
        avaxhomeLink: avaxhomeLink,
        rarbgLink: rarbgLink

    }, function() {
        // Update status to let user know options were saved.
        let status = document.getElementsByClassName('status');
        for (let i = 0; i < status.length; i++) {
            status[i].style.display = 'block';
            status[i].textContent = 'Options saved.';
        }
        setTimeout(function() {
            for (let i = 0; i < status.length; i++) {
                status[i].textContent = '';
                status[i].style.display = 'none';
            }
        }, 2000);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get({
        newTab: false,
        buttonText: 'shortName',

        duckDuckGoLink: false,
        googleButton: true,
        youtubeButton: true,
        googleImagesButton: true,
        googleMapsButton: true,
        googleTranslateButton: true,
        dictionaryButton: true,
        wikipediaButton: true,
        googleNewsButton: false,
        hackerNewsButton: false,
        facebookButton: false,
        twitterButton: false,
        imdButton: false,
        bingButton: false,
        githubButton: false,
        stackOverflowButton: false,
        redditButton: false,
        amazonButton: false,
        piratebayButton: false,
        avaxhomeButton: false,
        rarbgButton: false,

        googleLink: true,
        youtubeLink: true,
        googleImagesLink: true,
        googleMapsLink: true,
        googleTranslateLink: true,
        dictionaryLink: true,
        googleNewsLink: true,
        wikipediaLink: true,
        hackerNewsLink: false,
        facebookLink: false,
        twitterLink: false,
        imdLink: false,
        bingLink: false,
        githubLink: false,
        stackOverflowLink: false,
        redditLink: false,
        amazonLink: false,
        piratebayLink: false,
        avaxhomeLink: false,
        rarbgLink: false


    }, function(items) {
        document.getElementById('newTab').checked = items.newTab;
        document.getElementById('buttonText').value = items.buttonText;

        document.getElementById('duckDuckGoLink').checked = items.duckDuckGoLink;
        document.getElementById('googleButton').checked = items.googleButton;
        document.getElementById('youtubeButton').checked = items.youtubeButton;
        document.getElementById('googleImagesButton').checked = items.googleImagesButton;
        document.getElementById('googleMapsButton').checked = items.googleMapsButton;
        document.getElementById('googleTranslateButton').checked = items.googleTranslateButton;
        document.getElementById('dictionaryButton').checked = items.dictionaryButton;
        document.getElementById('googleNewsButton').checked = items.googleNewsButton;
        document.getElementById('hackerNewsButton').checked = items.hackerNewsButton;
        document.getElementById('facebookButton').checked = items.facebookButton;
        document.getElementById('twitterButton').checked = items.twitterButton;
        document.getElementById('wikipediaButton').checked = items.wikipediaButton;
        document.getElementById('imdButton').checked = items.imdButton;
        document.getElementById('bingButton').checked = items.bingButton;
        document.getElementById('githubButton').checked = items.githubButton;
        document.getElementById('stackOverflowButton').checked = items.stackOverflowButton;
        document.getElementById('redditButton').checked = items.redditButton;
        document.getElementById('amazonButton').checked = items.amazonButton;
        document.getElementById('piratebayButton').checked = items.piratebayButton;
        document.getElementById('avaxhomeButton').checked = items.avaxhomeButton;
        document.getElementById('rarbgButton').checked = items.rarbgButton;

        document.getElementById('googleLink').checked = items.googleLink;
        document.getElementById('youtubeLink').checked = items.youtubeLink;
        document.getElementById('googleImagesLink').checked = items.googleImagesLink;
        document.getElementById('googleMapsLink').checked = items.googleMapsLink;
        document.getElementById('googleTranslateLink').checked = items.googleTranslateLink;
        document.getElementById('dictionaryLink').checked = items.dictionaryLink;
        document.getElementById('googleNewsLink').checked = items.googleNewsLink;
        document.getElementById('hackerNewsLink').checked = items.hackerNewsLink;
        document.getElementById('facebookLink').checked = items.facebookLink;
        document.getElementById('twitterLink').checked = items.twitterLink;
        document.getElementById('wikipediaLink').checked = items.wikipediaLink;
        document.getElementById('imdLink').checked = items.imdLink;
        document.getElementById('bingLink').checked = items.bingLink;
        document.getElementById('githubLink').checked = items.githubLink;
        document.getElementById('stackOverflowLink').checked = items.stackOverflowLink;
        document.getElementById('redditLink').checked = items.redditLink;
        document.getElementById('amazonLink').checked = items.amazonLink;
        document.getElementById('piratebayLink').checked = items.piratebayLink;
        document.getElementById('avaxhomeLink').checked = items.avaxhomeLink;
        document.getElementById('rarbgLink').checked = items.rarbgLink;

    });
}
document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementsByClassName('save').addEventListener('click',
//     save_options);

let save = document.getElementsByClassName('save');
for (let i = 0; i < save.length; i++) {
    save[i].addEventListener('click', save_options);
}
