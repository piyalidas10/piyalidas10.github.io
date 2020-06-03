import {socialLinks} from './constants.js'; 
console.log('socialLinks => ', socialLinks);
var createClouds = (function() {
        let cloudElem = document.getElementById('cloud');
        let cloudWrapper = document.getElementById('cloudwrapper');
        let cloudElemHTML = cloudElem.innerHTML;
        
        for (let ci = 0; ci < 4; ci++) {
            let clouldDivElem = document.createElement('div');  
            clouldDivElem.setAttribute('class', 'cloud');
            clouldDivElem.innerHTML = cloudElemHTML;
            cloudWrapper.appendChild(clouldDivElem);
        }
})();

// Career stairs color change
var createColorsForCareer = (function() {
    let rectElem = document.querySelectorAll('.career-image > svg > g:nth-child(2n) > rect');
    rectElem.forEach(ele => {
        ele.setAttribute("fill", "#c12305");
    });
})();

// scroll to page section
var gotoPageSection = (function() {
    function getpageid(page) {
        let pageid = document.getElementById(page+'page');
        return pageid;
    }
    return {
        go: function(page) {
            let pagename = getpageid(page);
            pagename.scrollIntoView({ behavior: 'smooth'});
        }
    }
})();

// open social network page
var socialNetworkPages = (function(){
    return {
        go: function(socialpage) {
            console.log('socialLinks => ', socialLinks);
            let link = socialLinks[socialpage];
            if (socialpage === 'skype') {
                window.location = 'skype:' + link + '?chat';
            } else if (socialpage.indexOf('mail') !== -1) {
                window.open("mailto:"+link);
            } else {
                window.open(link);
            }
        }
    }
})();

// get current time using timer to change scenery
function timerToChangeScenery() {
    let d = new Date();
    let timer;
    let hours = d.getHours();
    if (hours >= 18) {
        console.log('Evening');
        window.clearTimeout(timer);
    } else {
        console.log('Morning');
    }
}
setInterval(timerToChangeScenery,3000);
