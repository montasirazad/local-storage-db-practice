// const db = {};

['a', 'b', 'c', 'd', 'd']

const addToDb = item => {
    const db = getDB();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;

    }
    saveTOdb(db)
    console.log(db);
}

const removeFromDB = item => {
    const db = getDB();
    delete db[item];
    saveTOdb(db);
}

const saveTOdb = (db) => {
    const dbJSON = JSON.stringify(db)
    localStorage.setItem('shopping-cart', dbJSON);
}

const getDB = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    savedDb = JSON.parse(savedDb)
    console.log(typeof savedDb);
    //const db = {};
    return savedDb;
}