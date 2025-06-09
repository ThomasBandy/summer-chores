// person's name
const person = "Homer"

// random number
let randomNum = Math.floor(Math.random() * 100);

// call function
doSummerChores()

// mowing
function mowYard(callback) {
    setTimeout(function() {
        console.log(person + " mowed the yard.")
        callback();
    }, 2000);
}

// weedeating
function weedEat(callback) {
     setTimeout(function() {
        console.log(person + " weedeated the around the house and fence.")
        callback();
    }, 1500);   
}

//  hedge trimming
function trimHedges(callback) {
    setTimeout(function() {
        console.log(person + " trimmed the hedges.")
        callback();
    }, 1000);
}

// collect wood
function collectWood(callback) {
    setTimeout(function() {
        console.log(person + " collected firewood.")
        callback();
    }, 2500);
}

// water garden
function waterGarden(callback) {
    setTimeout(function() {
        console.log(person + " watered the garden.")
        callback();
    }, 500);
}

//
function doSummerChores() {
    if (randomNum % 5 === 0) {
        mowYard(() => {
            weedEat(() => {
                trimHedges(() => {
                    collectWood(() => {
                        waterGarden(() => {
                            console.log(person + " finished all their chores!")
                        });
                    });
                });
            });
        });
    }
    else {
        console.log(person + " fell asleep...");
    }
}