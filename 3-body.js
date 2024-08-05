// translate your python code into js code!!!

// create debug on / off switch

const DEBUG = true;
if(!DEBUG){
    if(!window.console) window.console = {}
    const methods = ["log", "debug", "warn", "info", "dir", "trace"]
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
const G = 1;

// define our state array with three points

let point1 = {
    "name" : "point1",
    "position_x": 1,
    "position_y": 1,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point2 = {
    "name" : "point2",
    "position_x": 2,
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

// we need all of our functions


function get_distance(a, b){
    // takes two points and calculates the magnitude of the distance
    // between them (pythagorean theorem)
    console.log(`running get_distance on ${a.name} to ${b.name}`)
    return Math.sqrt((b.position_x - a.position_x)**2, (b.position_y - a.position_y)**2)
}

function get_direction_vector(a, b){
    // this derives the unit vector pointing from a to b
    console.log(`getting direction vector from ${a.name} to ${b.name}`);
    const magnitude = get_distance(a, b);
    const direction_vector = {
        "x" : (b.position_x - a.position_x) / magnitude,
        "y" : (b.position_y - a.position_y) / magnitude,
        "magnitude" : magnitude
    };
    return direction_vector;
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

function update_accelerations(a, b, c){

    // we have to derive each force as a vector. using our
    // and then

    // the equation for grav force is ((G * m1 * m2) / |r|^2) * unit vector

    // get unit vector
    const vect_a_to_b = get_direction_vector(a, b);
    const vect_a_to_c = get_direction_vector(a, c);
    const vect_b_to_c = get_direction_vector(b, c);

    const direct_vectors = {
            "vect_a_to_b": vect_a_to_b, 
            "vect_a_to_c": vect_a_to_c, 
            "vect_b_to_c": vect_b_to_c
        };

    // get |r|^2
    const rsquared_a_to_b = vect_a_to_b.magnitude**2;
    const rsquared_a_to_c = vect_a_to_c.magnitude**2;
    const rsquared_b_to_c = vect_b_to_c.magnitude**2;

    const rsquareds = {
            "rsquared_a_to_b": rsquared_a_to_b, 
            "rsquared_a_to_c": rsquared_a_to_c,
            "rsquared_b_to_c": rsquared_b_to_c
        };

    // put it all together
    const force_magnitude_a_and_b = (G *(a.mass * b.mass)) / rsquared_a_to_b;
    const force_magnitude_a_and_c = (G *(a.mass * b.mass)) / rsquared_a_to_c;
    const force_magnitude_b_and_c = (G *(a.mass * c.mass)) / rsquared_b_to_c;

    const force_magnitudes = {
            "force_magnitude_a_and_b": force_magnitude_a_and_b,
            "force_magnitude_a_and_c": force_magnitude_a_and_c,
            "force_magnitude_b_and_c": force_magnitude_b_and_c
            };

    // get the components of each force using the unit vector and combine them
    // a.acceleration_x = force_magnitude_a_and_b * vect_a_to_b.x
    //                  + force_magnitude_a_and_c * vect_a_to_c.x;
    
    // a.acceleration_y = force_magnitude_a_and_b * vect_a_to_b.y
    //                  + force_magnitude_a_and_c * vect_a_to_c.y;

    console.dir(direct_vectors);
    console.dir(rsquareds);
    console.dir(force_magnitudes);
    // const force_a_and_b = 0;
    // const force_a_and_c = 0;
    // const force_b_and_c = 0;

    // the convention is that the force vector of the first
    // point in the variable name is the "positive" direction

    // a.acceleration = (force_a_and_b + force_a_and_c) / a.mass
    // b.acceleration = -force_a_and_b + force_b_and_c / b.mass
    // c.acceleration = -force_a_and_c + -force_b_and_c / c.mass
}

function update_state(state){
    // loop over sim time
        // update_position on each point
        // update_acceleration on each point
        // update_velocity on each point
}

update_accelerations(...state);