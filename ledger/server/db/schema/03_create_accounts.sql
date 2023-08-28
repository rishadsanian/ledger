CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    account_number VARCHAR(20) NOT NULL,
    balance DECIMAL(18, 2) NOT NULL,
    account_type VARCHAR(10) NOT NULL, -- Debit or Credit
    fk_class_id INT REFERENCES classes(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);