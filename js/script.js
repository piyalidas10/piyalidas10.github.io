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
    console.log(ele);
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

function gotoNetwork(param) {
    if (param === 'skype') {
        let skypename = 'piyalidas.it';
        window.location = 'skype:' + skypename + '?chat';
    }
    if (param === 'facebook') {
        window.open("https://www.facebook.com/piyalidas10");
    }
    if (param === 'linkedin') {
        window.open("https://www.linkedin.com/in/piyalidas10/");
    }
}

document.getElementById("primarymail").addEventListener("click", sentmail);
document.getElementById("secondarymail").addEventListener("click", sentmail);

function sentmail() {
    let val = this.innerHTML;
    console.log(this.innerHTML);
    let emailTo = val;
    window.open("mailto:"+emailTo);
}

console.log(document.querySelectorAll('.socialntw'));
console.log(document.getElementsByClassName('socialntw'));