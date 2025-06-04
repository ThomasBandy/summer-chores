// person's name
const person = "Person"

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
    }, 2000);   
}

//  hedge trimming
function trimHedges(callback) {
    setTimeout(function() {
        console.log(person + " trimmed the hedges.")
        callback();
    }, 2000);
}

// collect wood
function collectWood(callback) {
    setTimeout(function() {
        console.log(person + " collected firewood.")
        callback();
    }, 2000);
}

// water garden
function waterGarden(callback) {
    setTimeout(function() {
        console.log(person + " watered the garden.")
        callback();
    }, 2000);
}

//
function doSummerChores() {
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