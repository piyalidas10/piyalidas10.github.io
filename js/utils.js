function createClouds () {
    let cloudElem = document.getElementById('cloud');
    let cloudWrapper = document.getElementById('cloudwrapper');
    let cloudElemHTML = cloudElem.innerHTML;
    
    for (let ci = 0; ci < 4; ci++) {
        let clouldDivElem = document.createElement('div');  
        clouldDivElem.setAttribute('class', 'cloud');
        clouldDivElem.innerHTML = cloudElemHTML;
        cloudWrapper.appendChild(clouldDivElem);
    }
}

// Career stairs color change
function createColorsForCareer() {
    let rectElem = document.querySelectorAll('.career-image > svg > g:nth-child(2n) > rect');
    rectElem.forEach(ele => {
        ele.setAttribute("fill", "#c12305");
    });
}

// scroll to page section
function gotoPageSection() {
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
};

export {createClouds, createColorsForCareer, gotoPageSection};
