-- Drop the existing transactions table if it exists
DROP TABLE IF EXISTS transactions CASCADE;

-- Create a new table for transactions
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    fk_master_account VARCHAR(50) NOT NULL, -- Reference to the master account
    fk_user_id INT NOT NULL REFERENCES users(id),
    amount DECIMAL(18, 2) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    reference VARCHAR(255),
    note TEXT,
    transaction_id SERIAL NOT NULL UNIQUE,    
    UNIQUE (fk_master_account, timestamp) -- Prevent duplicate transactions
);

-- Ensure that the fk_master_account exists in either accounts or sub_accounts
ALTER TABLE transactions
    ADD CONSTRAINT fk_master_account_exists
    FOREIGN KEY (fk_master_account) 
    REFERENCES accounts(master_account) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;

ALTER TABLE transactions
    ADD CONSTRAINT fk_master_account_exists_in_sub_accounts
    FOREIGN KEY (fk_master_account) 
    REFERENCES sub_accounts(master_account) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


