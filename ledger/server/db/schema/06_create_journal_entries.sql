-- Drop the existing journal_entries table if it exists
DROP TABLE IF EXISTS journal_entries CASCADE;

-- Create a new table for journal entries
CREATE TABLE journal_entries (
    id SERIAL PRIMARY KEY,
    debit_account_id INT NOT NULL REFERENCES accounts(id),
    credit_account_id INT NOT NULL REFERENCES accounts(id),
    fk_user_id INT NOT NULL REFERENCES users(id),
    amount DECIMAL(18, 2) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    reference VARCHAR(255),
    note TEXT
);
