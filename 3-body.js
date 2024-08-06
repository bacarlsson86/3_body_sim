// A simple 3-body sim in JS

// TODO: Animate results in an HTML canvas
// TODO: Create a line to suppress log statements
// TODO: Refactor all of the direct references to state elements
// to loops
// TODO: Create a randomizer for the points
// TODO: Create input for user

// create debug on / off switch

const DEBUG = true;
if(!DEBUG){
    // if(!window.console) window.console = {}
    console.log('Supressing console...')
    const methods = [ "log", "debug", "warn", "info", "dir", "trace"]
    for(let i = 0; i<methods.length; i++){
        console[methods[i]] = function(){}
    }
}

// set our simulation time interval
const sim_interval = 1;
const sim_length = 100;
const time = 0;
const G = 1;

// define our state array with three points

let point1 = {
    "name" : "point1",
    "position_x": 0,
    "position_y": 0,
    "velocity_x": -1,
    "velocity_y": -2, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point2 = {
    "name" : "point2",
    "position_x": 7,
    "position_y": 2,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point3 = {
    "name" : "point3",
    "position_x": 3,
    "position_y": 3,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let state = [point1, point2, point3];
console.table(state);

function run_sim(state){

    // we need all of our functions


    function get_distance(a, b){
        // takes two points and calculates the magnitude of the distance
        // between them (pythagorean theorem)
        // console.log(`running get_distance on ${a.name} to ${b.name}`)
        return Math.sqrt((b.position_x - a.position_x)**2 + (b.position_y - a.position_y)**2)
    }

    function get_direction_vector(a, b){
        // this derives the unit vector pointing from a to b
        // console.log(`getting direction vector from ${a.name} to ${b.name}`);
        const magnitude = get_distance(a, b);
        const direction_vector = {
            "origin": a.name,
            "destination" : b.name,
            "x_direction" : (b.position_x - a.position_x) / magnitude,
            "y_direction" : (b.position_y - a.position_y) / magnitude,
            "magnitude" : magnitude
        };
        return direction_vector;
    }

    function create_reversed_vector(a){
        // reverses vector, duh
        // console.log('creating reversed vector...');
        const reversed_vector = {
            "origin": a.destination,
            "destination" : a.origin,
            "x_direction" : -a.x_direction,
            "y_direction" : -a.y_direction,
            "magnitude" : a.magnitude
        };
        return reversed_vector;
    }

    function update_position(a){
        // update the position of a point using its current velocity over
        // one sim interval of time
        console.log(`updating position of ${a.name}`);
        a.position_x = a.position_x + (a.velocity_x * sim_interval);
        a.position_y = a.position_y + (a.velocity_y * sim_interval);

        return a;
    }

    function update_velocity(a){
        console.log(`updating velocity of ${a.name}`);
        a.velocity_x = a.velocity_x + (a.acceleration_x * sim_interval);
        a.velocity_y = a.velocity_y + (a.acceleration_y * sim_interval);
    }

    function update_accelerations(a, b, c){
        
        console.log("Inputs");
        console.dir(arguments);
        console.log("Updating...")
        // we have to derive each force as a vector. using our
        // and then

        // the equation for grav force is ((G * m1 * m2) / |r|^2) * unit vector

        // get unit vector
        const vect_a_to_b = get_direction_vector(a, b);
        const vect_a_to_c = get_direction_vector(a, c);
        const vect_b_to_c = get_direction_vector(b, c);

        // get reverse vectors
        const vect_b_to_a = create_reversed_vector(vect_a_to_b);
        const vect_c_to_a = create_reversed_vector(vect_a_to_c);
        const vect_c_to_b = create_reversed_vector(vect_b_to_c);

        const vectors = [vect_a_to_b, vect_a_to_c, vect_b_to_c, vect_c_to_a, vect_c_to_b, vect_b_to_a]

        // get |r|^2
        const rsquared_a_to_b = vect_a_to_b.magnitude**2;
        const rsquared_a_to_c = vect_a_to_c.magnitude**2;
        const rsquared_b_to_c = vect_b_to_c.magnitude**2;

        // put it all together

        // get the components of each force using the unit vector and combine them
        a.acceleration_x = ((G * a.mass * b.mass * vect_a_to_b.x_direction) / rsquared_a_to_b**2)
        a.acceleration_y = ((G * a.mass * b.mass * vect_a_to_b.y_direction) / rsquared_a_to_b**2)
        b.acceleration_x = ((G * a.mass * b.mass * vect_b_to_a.x_direction) / rsquared_a_to_b**2)
        b.acceleration_y = ((G * a.mass * b.mass * vect_b_to_a.y_direction) / rsquared_a_to_b**2)

        // console.log("Outputs:")
        // console.dir(vectors);
    }

    for(let i=0;i<=sim_length;i++){
        console.log(`Loop number ${i}`)
        update_accelerations(...state);
        // state[0] and state[1] are point1 and point2
        update_position(state[0]);
        update_position(state[1]);
        update_velocity(state[0]);
        update_velocity(state[1]);
    }
}
console.table(state)
run_sim(state);


// grab all of our display elements
let point1_img = document.querySelector("point1");
let point2_img = document.querySelector("point2");
let point3_img = document.querySelector("point3");

function MDN_Example{
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
