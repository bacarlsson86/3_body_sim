// example where elements immediately jump to a new location

function MDN_Example(){
    let zero;
    requestAnimationFrame(firstFrame);
    function firstFrame(timeStamp) {
    zero = timeStamp;
    animate(timeStamp);
    }
    function animate(timeStamp) {
    const value = (timeStamp - zero) / duration;
    if (value < 1) {
        element.style.opacity = value;
        requestAnimationFrame((t) => animate(t));
    } else element.style.opacity = 1;
    }
}