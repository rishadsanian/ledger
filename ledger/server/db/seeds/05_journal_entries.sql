-- Seed data for journal_entries table
INSERT INTO journal_entries (debit_account_id, credit_account_id, fk_user_id, amount, timestamp, reference, note)
VALUES
    (1, 5, 1, 100.00, '2023-01-01', 'Seed sale', 'Seed entry 1'),
    (6, 1, 1, 500.00, '2023-01-05', 'Seed rent payment', 'Seed entry 2'),
    (2, 5, 1, 300.00, '2023-01-10', 'Seed invoice', 'Seed entry 3');
