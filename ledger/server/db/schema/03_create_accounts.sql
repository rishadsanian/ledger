-- Drop the existing accounts table if it exists
DROP TABLE IF EXISTS accounts CASCADE;

-- Create a new table for accounts
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    account_number VARCHAR(20) UNIQUE NOT NULL,
    balance DECIMAL(18, 2),
    account_type VARCHAR(10) NOT NULL, -- Debit or Credit
    fk_class_id INT, -- Reference to the class, changed to INT
    fk_user_id INT REFERENCES users(id), -- Reference to the users table
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    master_account VARCHAR(50) UNIQUE NOT NULL
);
