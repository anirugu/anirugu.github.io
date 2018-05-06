// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("Spellings", 1);

// Create the schema
open.onupgradeneeded = function () {
    var db = open.result;
    var store = db.createObjectStore("MyObjectStore", { keyPath: "id" });
    var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
};

var store;

function InsertValue(obj) {
    store.put(obj);
}

function GetValue(key) {
    var getJohn = store.get(key);
    return getJohn;
}

open.onsuccess = function () {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    store = tx.objectStore("MyObjectStore");
    var index = store.index("NameIndex");

    var getBob = index.get(["Smith", "Bob"]);

    getJohn.onsuccess = function () {
        console.log(getJohn.result.name.first);  // => "John"
    };

    getBob.onsuccess = function () {
        console.log(getBob.result.name.first);   // => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function () {
        db.close();
    };
}