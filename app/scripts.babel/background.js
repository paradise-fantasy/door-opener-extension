'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(() => {
  fetch('https://merkur.komstek.no/api/open-door');
});
