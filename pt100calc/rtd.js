export const pt100res = function(temp) {
    let R0 = 100
    let A = 3.9083e-3
    let B = -5.7750e-7
    let ohm = R0 + (1 + A * temp + B * (temp * temp))
    return ohm
}

export const pt100temp = function(ohm) {
    let R0 = 100
    let A = 3.9083e-3
    let B = -5.7750e-7
    //let temp = -((Math.sqrt(A * A * R0 + 4 * B * ohm - 4 * B * R0) / 10 + A) / (2 * B))
    let temp = (-R0 * A + Math.sqrt(R0 * R0 * A * A - 4 * R0 * B * (R0 - ohm))) / (2 * R0 * B)
    return temp
}

