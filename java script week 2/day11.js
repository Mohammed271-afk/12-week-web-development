const ages = [12, 16, 18, 14, 21];

function findAdult(ages) {
    return ages.find(age => age >= 18);
}

console.log(findAdult(ages));

const newAges = [10, 15, 17, 25, 30];

console.log(findAdult(newAges));