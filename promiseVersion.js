// person's name
const person = "Marge"

// random number
let randomNum = Math.floor(Math.random() * 100);

// mowing
const mowYard = new Promise((resolve, reject) => {
    if (randomNum % 5 === 0) {
        setTimeout(function() {
            resolve(person + " mowed the yard.")
        }, 2000);
    } 
    else {
        reject(person + " fell asleep...")
    }
});
// weedeating
const weedEat = new Promise((resolve) => {
    setTimeout(function() {
        resolve(person + " weedeated the yard.")
    }, 1500);
});

//  hedge trimming
const trimHedges = new Promise((resolve) => {
    setTimeout(function() {
        resolve(person + " trimmed the hedges.")
    }, 1000);
});

// collect wood
const collectWood = new Promise((resolve) => {
    setTimeout(function() {
        resolve(person + " collected fire wood.")
    }, 2500);
});

// water garden
const waterGarden = new Promise((resolve) => {
    setTimeout(function() {
        resolve(person + " watered the garden.")
    }, 500);
});

// finished
const finish = (person + " finished all their chores!");

// summer chores
function doSummerChores() {
    mowYard
    .then((value) => {
        console.log(value);
        return weedEat
    })
    .then((value) => {
        console.log(value);
        return trimHedges
    })
    .then((value) => {
        console.log(value);
        return collectWood
    })
    .then((value) => {
        console.log(value);
        return waterGarden
    })
    .then((value) => {
        console.log(value);
        return finish
    })
    .then((value) => {
        console.log(value);
    })
    .catch((value) => {
        console.log(value);
    })
}

// call function
doSummerChores()
