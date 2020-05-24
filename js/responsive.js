var deviceWidthCheck = (function() {
    let wavesDiv = document.getElementById('waves');
    let treeDiv = document.getElementById('tree');
    let fieldDiv = document.getElementById('field');
    let personinfoDiv = document.getElementById('personinfo');
    let cloudwrapperDiv = document.getElementById('cloudwrapper');
    let sunwrapperDiv = document.getElementById('sunwrapper');
    let sunraysDiv = document.getElementById('sunrays');
    let ballonDiv = document.getElementById('ballon');
    let middleDiv = document.getElementById('middle');

    if (screen.width <= 1200) {
        wavesDiv.style.height = '80%';
        treeDiv.style.top = '-260px';
        personinfoDiv.style.left = '25%';
    }
    if (screen.width <= 900) {
        wavesDiv.style.height = '70%';
        fieldDiv.style.top = '-95px';
        treeDiv.style.top = '-240px';
        personinfoDiv.style.left = '15%';
    }
    if (screen.width <= 768) {
        personinfoDiv.style.left = '5%';
        cloudwrapperDiv.children[0].style.width = '60px';
        cloudwrapperDiv.children[0].style.left = '10px';
        cloudwrapperDiv.children[0].style.top = '10px';
        cloudwrapperDiv.children[1].style.width = '80px';
        cloudwrapperDiv.children[1].style.left = '40px';
        cloudwrapperDiv.children[1].style.top = '30px';
        cloudwrapperDiv.children[2].style.width = '120px';
        cloudwrapperDiv.children[2].style.left = '90px';
        cloudwrapperDiv.children[2].style.top = '70px';
        cloudwrapperDiv.children[3].style.width = '60px';
        cloudwrapperDiv.children[3].style.top = '30px';
        cloudwrapperDiv.children[4].style.width = '80px';
        cloudwrapperDiv.children[4].style.right = '60px';
        middleDiv.style.height = '250px';
        sunwrapperDiv.style.width = '120px';
        sunwrapperDiv.style.top = '32px';
        sunraysDiv.style.width = '120px';
        sunraysDiv.style.top = '0';
        sunraysDiv.style.left = '0';
        ballonDiv.style.width = '250px';
        ballonDiv.style.right = '10%';
        fieldDiv.style.top = '-70px';
        treeDiv.style.width = '150px';
        treeDiv.style.top = '-175px';
    }
    if (screen.width <= 680) {
        personinfoDiv.style.width = '200px';
        personinfoDiv.style.left = '10%';
        personinfoDiv.style.top = '35%';
        wavesDiv.style.height = '55%';
        treeDiv.style.width = '110px';
        treeDiv.style.top = '-140px';
        // wavesDiv.style.
    }
    if (screen.width <= 440) {
        middleDiv.style.height = '200px';
        ballonDiv.style.width = '200px';
        ballonDiv.style.right = '10%';
        personinfoDiv.style.width = '150px';
        wavesDiv.style.height = '50%';
        fieldDiv.style.top = '-50px';
        treeDiv.style.top = '-130px';
    }
})();