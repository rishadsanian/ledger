# Database Structure Update

The schema now includes a `journal_entries` table used to record paired debit and credit transactions.

```sql
CREATE TABLE journal_entries (
    id SERIAL PRIMARY KEY,
    debit_account_id INT NOT NULL REFERENCES accounts(id),
    credit_account_id INT NOT NULL REFERENCES accounts(id),
    fk_user_id INT NOT NULL REFERENCES users(id),
    amount DECIMAL(18,2) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    reference VARCHAR(255),
    note TEXT
);
```

Each call to the entry API inserts rows into both the `transactions` table and `journal_entries` to ensure debits equal credits.
