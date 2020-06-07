import {socialLinks, metaTags, siteContent} from './constants.js';
import {createClouds, createColorsForCareer, timerToChangeScenery, createMetaTag, gotoPageSection, setSiteContent, svgHtmlInsertUsingId, openSocialNetworkPage} from './utils.js'; 

createClouds();
createColorsForCareer();
setInterval(timerToChangeScenery(),3000);

// set meta keys
let metaKeys = Object.keys(metaTags);
for (let i=0; i<metaKeys.length; i++) {
    createMetaTag(metaKeys[i], metaTags[metaKeys[i]]);
}

document.getElementById('name').innerHTML = siteContent.name;
document.getElementById('designation').innerHTML = siteContent.designation;

console.log(siteContent);

setSiteContent('aboutmepage', siteContent.sections, ['id', 'heading', 'content']);
setSiteContent('careerpage', siteContent.sections, ['id', 'heading']);
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
        gotoPageSection(idValue);
    }
});


