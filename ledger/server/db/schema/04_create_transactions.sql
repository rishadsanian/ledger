DROP TABLE IF EXISTS transactions CASCADE;


CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    account_number VARCHAR(20) NOT NULL REFERENCES accounts(account_number),
    user_id INT NOT NULL REFERENCES users(id),
    amount DECIMAL(18, 2) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    reference VARCHAR(255),
    note TEXT,
  transaction_id SERIAL NOT NULL UNIQUE,    
    UNIQUE (account_number, timestamp) -- Prevent duplicate transactions
);



-- DROP TABLE IF EXISTS transactions CASCADE;

-- CREATE TABLE transactions (
--     id SERIAL PRIMARY KEY,
--     account_number VARCHAR(20) NOT NULL REFERENCES accounts(account_number),
--     user_id INT NOT NULL REFERENCES users(id),
--     amount DECIMAL(18, 2) NOT NULL,
--     timestamp TIMESTAMP NOT NULL,
--     reference VARCHAR(255),
--     note TEXT,
--     transaction_id SERIAL NOT NULL UNIQUE,
--     -- UNIQUE (account_number, timestamp) -- Consider whether this constraint is necessary
-- );