
-- Drop the existing sub_accounts table if it exists
DROP TABLE IF EXISTS sub_accounts CASCADE;

-- Create a new table for sub-accounts
CREATE TABLE sub_accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    account_number VARCHAR(20) NOT NULL,
    balance DECIMAL(18, 2),
    account_type VARCHAR(10) NOT NULL, -- Debit or Credit
    fk_account_id INT NOT NULL REFERENCES accounts(id), -- Reference to the parent account
    fk_class_id INT NOT NULL REFERENCES classes(id), -- Reference to the class, changed to INT
    fk_user_id INT NOT NULL REFERENCES users(id), -- Reference to the users table
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    master_account VARCHAR(50) UNIQUE NOT NULL,
    -- Add a unique constraint to ensure account_number is unique within fk_account_id
    CONSTRAINT unique_account_number UNIQUE (account_number, fk_account_id)
);
