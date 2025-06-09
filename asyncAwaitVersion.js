// person's name
const person = "Ned"

// mowing
const mowYard = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 100);
            if(randomNum % 5 === 0) {
                resolve(person + " mowed the yard.")
            }
            else {
                reject(person + " fell asleep...")
            }
        }, 2000)
    })
}
// weedeating
const weedEat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weedeated = true;
            if(weedeated) {
                resolve(person + " weedeated the yard.")
            }
            else {
                reject(person + " fell asleep...")
            }
        }, 1500)
    })
}
//  hedge trimming
const trimHedges = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trimmed = true;
            if(trimmed) {
                resolve(person + " trimmed the hedges.")
            }
            else {
                reject(person + " fell asleep...")
            }
        }, 1000)
    })
}
// collect wood
const collectWood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const collected = true;
            if(collected) {
                resolve(person + " collected fire wood.")
            }
            else {
                reject(person + " fell asleep...")
            }
        }, 2500)
    })
}
// water garden
const waterGarden = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const watered = true;
            if(watered) {
                resolve(person + " watered the garden.")
            }
            else {
                reject(person + " fell asleep...")
            }
        }, 500)
    })
}
// summer chores
const doSummerChores = async () => {
    try {    
        const first = await mowYard();
        console.log(first)

        const second = await weedEat();
        console.log(second)

        const third = await trimHedges();
        console.log(third)

        const fourth = await collectWood();
        console.log(fourth)

        const fifth = await waterGarden();
        console.log(fifth)
        console.log(person + " finished all their chores!")
    }
    catch(error) {
        console.log(error)
    }
}

// call function
doSummerChores();