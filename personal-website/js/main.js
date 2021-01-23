import {socialLinks, metaTags, siteContent} from './constants.js';
import {createColorsForCareer, createMetaTag, gotoPageSection, setSiteContent, svgHtmlInsertUsingId, openSocialNetworkPage} from './utils.js'; 
// import {timerFunc} from './timer.js';

createColorsForCareer();

// set meta keys
let metaKeys = Object.keys(metaTags);
for (let i=0; i<metaKeys.length; i++) {
    createMetaTag(metaKeys[i], metaTags[metaKeys[i]]);
}

document.getElementById('name').innerHTML = siteContent.name;
document.getElementById('designation').innerHTML = siteContent.designation;

console.log(siteContent);

setSiteContent('aboutmepage', siteContent.sections, ['id', 'heading', 'intro', 'info']);
setSiteContent('careerpage', siteContent.sections, ['id', 'heading']);
setSiteContent('portfoliopage', siteContent.sections, ['id', 'heading']);
setSiteContent('contactpage', siteContent.sections, ['id', 'heading']);

svgHtmlInsertUsingId('primarymail', socialLinks.primarymail);
svgHtmlInsertUsingId('secondarymail', socialLinks.secondarymail);

document.getElementById('contactpage').addEventListener('click',function(e) {
    if (e.srcElement.id !== '') {
        console.log(e.srcElement.id);
        let link = socialLinks[e.srcElement.id];
        openSocialNetworkPage(e.srcElement.id, link);
    }
});

document.getElementById('sitemenu').addEventListener('click',function(e) {
    if (e.target.parentElement.hasAttribute('id')) {
        let idValue = e.target.parentElement.getAttribute('id');
        console.log(idValue);
        gotoPageSection(idValue);
    }
});

// get current time using timer to change scenery
// if (typeof(Worker) !== "undefined") {
//     let myWorker = new Worker(timerFunc);
//     let count = 0;
//     setInterval(() => {
//         count = count + 1;
//         myWorker.postMessage({ action: "double", payload: count });
//         myWorker.onmessage = (event) => {console.log(event)};
//     },3000);
// } else {
//         console.log("Sorry! No Web Worker support.");
// }

