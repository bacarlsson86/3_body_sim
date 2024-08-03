// translate your python code into js code!!!

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
    "position_x": 0,
    "position_y": 0,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point2 = {
    "position_x": 0,
    "position_y": 1,
    "velocity_x": 0,
    "velocity_y": 0, 
    "acceleration_x": 0, 
    "acceleration_y": 0,
    "mass": 1
};

let point3 = {
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

function update_position(){

}

function update_velocity(){
    
}

function update_acceleration(){
    
}

function update_state(state){
    
}