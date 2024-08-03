// translate your python code into js code!!!

// create debug on / off switch

const DEBUG = true;
if(!DEBUG){
    if(!window.console) window.console = {}
    const methods = ["log", "debug", "warn", "info"]
    for(let i = 0; i<methods.length; i++){
        console[methods[i]] = function(){}
    }
}

// rough outline
// initialize simulation

// start loop that ends when time = sim_length variable
    // for every sim interval (time), run update_state on the current
    // state array

    // update view

    // increment time variable

// loop

// set our simulation time interval
const sim_interval = 1;
const sim_length = 10;
const time = 0;

// define our state array with three points

let point1 = {
    "name" : "point1",
    "position_x": 0,
    "position_y": 0,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point2 = {
    "name" : "point2",
    "position_x": 0,
    "position_y": 1,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point3 = {
    "name" : "point3",
    "position_x": 1,
    "position_y": 0,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let state = [point1, point2, point3];

// we need all of our functions


function get_distance(a, b){
    // takes two points and calculates the magnitude of the distance
    // between them (pythagorean theorem)
    return Math.sqrt((a.position_x - b.position_x)**2, (a.position_y - b.position_y)**2)
}

function get_direction(a, b){
    // this derives the vector needed to translate from a to b
    // represented as an object
    console.log(`getting direction vector from ${a.name} to ${b.name}`);
    const direction = {
        "x" : b.position_x - a.position_x,
        "y" : b.position_y - a.position_y
    };
    return direction;
}

function update_position(a){
    // update the position of a point using its current velocity over
    // one sim interval of time
    console.log(`updating position of ${a.name}`);
    a.position_x = a.position_x + (velocity_x * sim_interval);
    a.position_y = a.position_y + (velocity_y * sim_interval);

    return a;
}

function update_velocity(a){
    console.log(`updating velocity of ${a.name}`);
    a.velocity_x = a.velocity_x + (acceleration_x * sim_interval);
    a.velocity_y = a.velocity_y + (acceleration_y * sim_interval);
}

function update_acceleration(a, b, c){

    // we have to derive each force as a vector and then
    // use trigonometry to derive the x and y components
    // thus we need the direction vector. we will obey
    // the convention spelled out below

    // 

    // const force_a_and_b = 0;
    // const force_a_and_c = 0;
    // const force_b_and_c = 0;

    // the convention is that the force vector of the first
    // point in the variable name is the "positive" direction

    // a.acceleration = force_a_and_b + force_a_and_c
    // b.acceleration = -force_a_and_b + force_b_and_c
    // c.acceleration = -force_a_and_c + -force_b_and_c
}

function update_state(state){
    // loop over sim time
        // update_position on each point
        // update_acceleration on each point
        // update_velocity on each point
}