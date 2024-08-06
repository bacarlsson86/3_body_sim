// example where elements immediately jump to a new location

function MDN_Example(){
    let zero;
    requestAnimationFrame(firstFrame);
    function firstFrame(timeStamp) {
        zero = timeStamp;
        animate(timeStamp);
    }
    function animate(timeStamp) {
        // this function will need access to state so it can
        // update it
        // here we will update our time
        const value = (timeStamp - zero) / duration;

        // each loop will run one simulation step on the state
        // of the previous frame. we should rewrite our sim
        // function with an argument of the current state
        // and a sim_interval set at the outset

        if (value < 1) {
            element.style.opacity = value;
            requestAnimationFrame((t) => animate(t));
        } else element.style.opacity = 1;
    }
}