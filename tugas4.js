var Agus = 150;
var Bobi = 170;
var Cinta = 145;
function tinggi_badan(x, y, z) {
    if (x > y && x > z && y > z) {
        console.log(`${x}\n${y}\n${z}`)
    }
    else if (x > y && x > z && y < z) {
        console.log(`${x}\n${z}\n${y}`)
    }
    else if (y > z && y > x && z > x) {
        console.log(`${y}\n${z}\n${x}`)
    }
    else if (y > z && y > x && z < x) {
        console.log(`${y}\n${x}\n${z}`)
    }
    else if (z > y && z > x && y > x) {
        console.log(`${z}\n${y}\n${x}`)
    }
    else if (z > y && y > x && y < x) {
        console.log(`${z}\n${x}\n${y}`)
    }
}

tinggi_badan(Agus, Bobi, Cinta)