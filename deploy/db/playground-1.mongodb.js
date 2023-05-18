
const database = 'domina';
const collections = ['user','task'];

// Create a new database.
use(database);

// Create a new collection.
collections.map((coll) => db.createCollection(coll) )
