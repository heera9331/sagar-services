import mysql from "mysql";

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sagar-services'
})

// Connect to the database
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        throw err;
    }
    console.log('Connected to MySQL database.');
});

export default conn;