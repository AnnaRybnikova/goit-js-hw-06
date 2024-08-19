class Storage {
    #items = [];

    constructor(items) {
        this.#items = items;
    }

    getItems = () => this.#items;

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        let newArray = [];
        this.#items.forEach(item => {
            if (item != itemToRemove) {
                newArray.push(item);
            }
        })
        this.#items = newArray;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]