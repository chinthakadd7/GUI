const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const dbFile = './database.sqlite';
let db;

// Function to initialize database
const initializeDatabase = () => {
    return new Promise((resolve, reject) => {
        // Create new database connection
        db = new sqlite3.Database(dbFile, (err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                reject(err);
            } else {
                console.log('Connected to SQLite database');
                
                // Create tables
                db.run(`CREATE TABLE IF NOT EXISTS bookings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    guest_name TEXT NOT NULL,
                    check_in_date TEXT NOT NULL,
                    check_out_date TEXT NOT NULL,
                    adults INTEGER NOT NULL,
                    children INTEGER NOT NULL,
                    room_type TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`, (err) => {
                    if (err) {
                        console.error('Error creating table:', err);
                        reject(err);
                    } else {
                        console.log('Bookings table created successfully');
                        resolve();
                    }
                });
            }
        });
    });
};

// Function to reset database
const resetDatabase = () => {
    return new Promise((resolve, reject) => {
        if (db) {
            db.close(() => {
                try {
                    if (fs.existsSync(dbFile)) {
                        fs.unlinkSync(dbFile);
                        console.log('Existing database deleted');
                    }
                    resolve();
                } catch (err) {
                    console.error('Error deleting database:', err);
                    reject(err);
                }
            });
        } else {
            resolve();
        }
    });
};

// Reset and initialize database on startup
const setupDatabase = async () => {
    try {
        await resetDatabase();
        await initializeDatabase();
    } catch (err) {
        console.error('Database setup failed:', err);
        process.exit(1);
    }
};

// Routes
app.post('/api/bookings', (req, res) => {
    const { guest_name, check_in_date, check_out_date, adults, children, room_type } = req.body;
    
    const query = `INSERT INTO bookings (guest_name, check_in_date, check_out_date, adults, children, room_type) 
                   VALUES (?, ?, ?, ?, ?, ?)`;
    
    db.run(query, [guest_name, check_in_date, check_out_date, adults, children, room_type], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Booking created successfully',
            bookingId: this.lastID
        });
    });
});

app.get('/api/bookings', (req, res) => {
    db.all('SELECT * FROM bookings', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Setup database and start server
setupDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
});

// Handle cleanup on shutdown
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Database connection closed');
        process.exit(0);
    });
}); 