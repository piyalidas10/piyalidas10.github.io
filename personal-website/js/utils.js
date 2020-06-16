let createClouds = function() {
    let cloudElem = document.getElementById('cloud');
    let cloudWrapper = document.getElementById('cloudwrapper');
    let cloudElemHTML = cloudElem.innerHTML;
    
    for (let ci = 0; ci < 4; ci++) {
        let clouldDivElem = document.createElement('div');  
        clouldDivElem.setAttribute('class', 'cloud');
        clouldDivElem.innerHTML = cloudElemHTML;
        cloudWrapper.appendChild(clouldDivElem);
    }
};

// Career stairs color change
function createColorsForCareer() {
    let rectElem = document.querySelectorAll('.career-image > svg > g:nth-child(2n) > rect');
    rectElem.forEach(ele => {
        ele.setAttribute("fill", "#c12305");
    });
}

function createMetaTag(attrName, attrContent) {
    var meta = document.createElement('meta');
    meta.setAttribute(attrName, attrContent);
    document.getElementsByTagName('head')[0].appendChild(meta);
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

// scroll to page section
function gotoPageSection(page) {
    let pageid = document.getElementById(page+'page');
    if (pageid !== null) {
        pageid.scrollIntoView({ behavior: 'smooth'});
    }
}

function setSiteContent(pageid, content, chooseattr) {
    let div = document.getElementById(pageid).querySelector('.container');
    let getIndex = findWithAttr(content, 'id', pageid);
    if((chooseattr.includes('heading')) === true) {
        let createH1 = document.createElement('h1');
        div.insertBefore(createH1, div.childNodes[0]);
        div.querySelector('h1').innerHTML = content[getIndex].heading;
    }
    if((chooseattr.includes('content')) === true) {
        let createDiv = document.createElement('div');
        createDiv.setAttribute('class', 'myintro');
        div.appendChild(createDiv);
        div.querySelector('.myintro').innerHTML = content[getIndex].content;
    }
}

function svgHtmlInsertUsingId(id, txt) {
    document.getElementById(id).innerHTML = txt;
}

// open social network page
function openSocialNetworkPage(socialpage, link){
    if (socialpage === 'skype') {
        window.location = 'skype:' + link + '?chat';
    } else if (socialpage.indexOf('mail') !== -1) {
        window.open("mailto:"+link);
    } else {
        window.open(link);
    }
}

export {createClouds, createColorsForCareer, createMetaTag, gotoPageSection, setSiteContent, svgHtmlInsertUsingId, openSocialNetworkPage}
