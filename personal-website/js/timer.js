function timerFunc() {
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

export {timerFunc}