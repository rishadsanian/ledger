-- 03_create_accounts.sql
DROP TABLE IF EXISTS accounts CASCADE;

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    account_number VARCHAR(20) NOT NULL UNIQUE, 
    sub_account_number VARCHAR(20) NOT NULL , 

     -- Unique constraint for the combination of account_number and sub_account_number
    UNIQUE (account_number, sub_account_number),
    
    balance DECIMAL(18, 2),
    account_type VARCHAR(10) NOT NULL, -- Debit or Credit
    fk_class_id  VARCHAR(10), --
    -- fk_class_id INT REFERENCES classes(id), --
    user_id INT REFERENCES users(id), -- Reference to the users table
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);
