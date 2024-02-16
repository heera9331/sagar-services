const sqlite3 = require('sqlite3').verbose();

// Open SQLite database connection
// @ts-ignore
const db : any = new sqlite3.Database('/data/database.sqlite3', (err: any) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});
 
export default db;

// Create a table
// db.run(`
//     CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY,
//         username TEXT NOT NULL,
//         password TEXT NOT NULL
//     )
// `, (err: any) => {
//     if (err) {
//         console.error('Error creating table:', err.message);
//     } else {
//         console.log('Table "users" created successfully.');
//     }
// });

// db.run('insert into users (id, username, password) values (1, "heera7242", "123456")', (err:any, ack:any)=>{
//     if(err) {
//         console.log("error", err);
//     }else { 
//         console.log("created", ack);
//     }
// })




