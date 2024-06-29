import math

## Create a script that will model a 3 body system and its evolution over time
## under gravitation

## intialize simulation with starting positions and values for all variables
# 
# Needed variables
# point: x_position, y_position, x_velocity, y_velocity, x_accel, y_accel, masses

# Kinematic relations
# position += velocity*time_interval
# velocity += accel*time_interval
# accel += (net_force*time_interval) / mass

variables = ["position", "velocity", "force", "acceleration", "mass"]
state = {"point1" : None, "point2" : None, "point3": None}

for point in state:
    state[point] = {variable: [0, 0] for variable in variables}

state

t_interval = 1

def get_dist_vect(p1, p2):
    # take in two points and get their distance as a vector

    p1_x = p1[0]
    p1_y = p1[1]
    p2_x = p2[0]
    p2_y = p2[1]

    dist = [p2_x - p1_x, p2_y - p2_y]
    return dist

def get_magnitude(d):
    d_x = d[0]
    d_y = d[1]

    mag = math.sqrt(d_x^2 + d_y^2)
    return mag

def update_position(p, v, t):
    # p is (x, y) coords
    # v is a vector of (x, y)
    # t is time in seconds
    p_x = p[0]
    p_y = p[1]
    v_x = v[0]
    v_y = v[1]

    new_p = [(v_x * t) + p_x, (v_y * t) + p_y]
    return new_p

def update_velocity(v, a, t):
    # v is a vector of (x, y)
    # a is a vector of (x, y)
    # t is time in seconds
    v_x = v[0]
    v_y = v[1]
    a_x = a[0]
    a_y = a[1]

    new_v = [(a_x * t) + v_x, (a_y * t) + v_y]
    return new_v

def update_accel(f, m):
    f_x = f[0]
    f_y = f[1]

    new_a = [f_x / m, f_y / m]

    return new_a

def update_all(point, t_interval):
    point["position"] = update_position(point["position"], point["velocity"], t_interval)
    point["velocity"] = update_velocity(point["velocity"], point["acceleration"], t_interval)
    point["acceleration"] = update_accel(point["force"], point["mass"])


def update_forces(p1, p2, p3):
    # calculate all forces on each other

    dist_p1_to_p2 = get_dist_vect(p1, p2)
    dist_p1_to_p3 = get_dist_vect(p1, p3)
    dist_p2_to_p3 = get_dist_vect(p2, p3)

    mag_dist_p1_to_p2 = get_magnitude(dist_p1_to_p2)
    mag_dist_p1_to_p3 = get_magnitude(dist_p1_to_p3)
    mag_dist_p2_to_p3 = get_magnitude(dist_p2_to_p3)

    force_p1_to_p2 = [dist_p1_to_p2[0] / mag_dist_p1_to_p2^2,
                      dist_p1_to_p2[1] / mag_dist_p1_to_p2^2]
    force_p1_to_p3 = [dist_p1_to_p3[0] / mag_dist_p1_to_p3^2,
                      dist_p1_to_p3[1] / mag_dist_p1_to_p3^2]
    force_p2_to_p3 = [dist_p2_to_p3[0] / mag_dist_p2_to_p3^2,
                      dist_p2_to_p3[1] / mag_dist_p2_to_p3^2]
    
    # if we get the signs wrong, we will have repulsion, lol
    sum_force_p1 = force_p1_to_p2 + force_p1_to_p3
    sum_force_p2 = -force_p1_to_p2 + force_p2_to_p3
    sum_force_p3 = -force_p1_to_p3 + -force_p2_to_p3
    return [sum_force_p1, sum_force_p2, sum_force_p3]

def update_state(state, t_interval):
    # this function will update state for each point_mass in this order
    # position, velocity, force, acceleration

    # for each point in state, run update all 

    # then calculate a vector of new_forces

    # then loop over the state and change each force

    # print iteration number

# main program loop that takes in a t_interval and the number of intervals
    # print iteration number
    # run update_state(current_state, t_interval)
    # run update_display(current_state)