// PRACTICE - 1

const db = {};

const getDb = () => {

    return db;
}

const addToDb = (item) => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }

    console.log(db);

};

const car = {
    name: "fiat",
    color: 'red'
}
car.color = 'green';
console.log(car.name)
console.log(car['color']);
