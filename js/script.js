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

function gotoHome() {
    let homePage = document.getElementById('homepage');
    homePage.scrollIntoView();
}

function gotoAboutme() {
    let aboutmePage = document.getElementById('aboutmepage');
    aboutmePage.scrollIntoView({ behavior: 'smooth'});
}

function gotoCareer() {
    let careerPage = document.getElementById('careerpage');
    careerPage.scrollIntoView({ behavior: 'smooth'});
}

function gotoPortfolio() {
    let portfolioPage = document.getElementById('portfoliopage');
    portfolioPage.scrollIntoView({ behavior: 'smooth'});
}

function gotoBlog() {
    let blogPage = document.getElementById('blogpage');
    blogPage.scrollIntoView({ behavior: 'smooth'});
}

function gotoContact() {
    let contactPage = document.getElementById('contactpage');
    contactPage.scrollIntoView({ behavior: 'smooth'});
}