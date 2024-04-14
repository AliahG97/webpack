import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');

// Creates a connection to the database and version we want to use
const textDb = await openDB("jate", 1);

// Creates a new transaction and specify the database and data privileges
const tx = textDb.transaction("jate", "readwrite");

// Opens up the desired object store
const store = tx.objectStore("jate");

// The .put() method is used on the store and content passed in
const request = store.put({ id: 1, value: content });

// Confirmation of the request
const result = await request;
console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
