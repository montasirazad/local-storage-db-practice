// const db = {};

// const addToDb = item => {

//     const db = getDb();
//     db[item] = 1;

// }

// const getDb = () => {
//     return db;
// }




const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    saveToDb(db);
}

const removeItem = (item) => {
    const db = getDb();
    delete db[item];
}

const saveToDb = (db) => {
    const dbJSON = JSON.stringify(db)
    localStorage.setItem('db-cart', dbJSON);
}

const getDb = () => {
    const insertedItem = localStorage.getItem('db-cart')
    return insertedItem;
}