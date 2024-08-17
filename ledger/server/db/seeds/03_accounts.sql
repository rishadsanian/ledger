-- Seed data for accounts table
INSERT INTO accounts (name, account_number, balance, account_type, fk_class_id, fk_user_id, master_account, status)
VALUES
    -- Assets
    ('Cash', '1001', 5000.00, 'Debit', 10, 1, '10-1001-0000', 'active'),
    ('Accounts Receivable', '1002', 3000.00, 'Debit', 10, 1, '10-1002-0000', 'active'),

    -- Liabilities
    ('Accounts Payable', '2001', 2000.00, 'Credit', 20, 1, '20-2001-0000', 'active'),
    ('Loan Payable', '2002', 5000.00, 'Credit', 20, 1, '20-2002-0000', 'active'),

    -- Revenue
    ('Sales', '3001', 10000.00, 'Credit', 30, 1, '30-3001-0000', 'active'),

    -- Expense
    ('Rent Expense', '4001', 1000.00, 'Debit', 40, 1, '40-4001-0000', 'active'),
    ('Utilities Expense', '4002', 500.00, 'Debit', 40, 1, '40-4002-0000', 'active'),

    -- Equity
    ('Owner''s Equity', '5001', 0.00, 'Credit', 50, 1, '50-5001-0000', 'active');


-- Seed data for sub_accounts table
INSERT INTO sub_accounts (name, account_number, balance, account_type, fk_account_id, fk_class_id, fk_user_id, master_account, status)
VALUES
    -- Cash sub-accounts
    ('Petty Cash', '100101', 500.00, 'Debit', 1, 10, 1, '10-1001-0101', 'active'),
    ('Savings Account', '100102', 4500.00, 'Debit', 1, 10, 1, '10-1001-0102', 'active'),

    -- Accounts Receivable sub-accounts
    ('Customer A', '100201', 1000.00, 'Debit', 2, 10, 1, '10-1002-0201', 'active'),
    ('Customer B', '100202', 2000.00, 'Debit', 2, 10, 1, '10-1002-0202', 'active'),

    -- Accounts Payable sub-accounts
    ('Vendor X', '200101', 1000.00, 'Credit', 3, 20, 1, '20-2001-0101', 'active'),
    ('Vendor Y', '200102', 1000.00, 'Credit', 3, 20, 1, '20-2001-0102', 'active'),

    -- Loan Payable sub-accounts
    ('Bank Loan', '200201', 3000.00, 'Credit', 4, 20, 1, '20-2002-0201', 'active'),

    -- Sales sub-accounts
    ('Product A Sales', '300101', 5000.00, 'Credit', 5, 30, 1, '30-3001-0101', 'active'),
    ('Product B Sales', '300102', 5000.00, 'Credit', 5, 30, 1, '30-3001-0102', 'active'),

    -- Rent Expense sub-accounts
    ('Office Rent', '400101', 1000.00, 'Debit', 6, 40, 1, '40-4001-0101', 'active'),

    -- Utilities Expense sub-accounts
    ('Electricity Bill', '400201', 500.00, 'Debit', 7, 40, 1, '40-4002-0201', 'active'),

    -- Owner's Equity sub-accounts
    ('Initial Investment', '500101', 0.00, 'Credit', 8, 50, 1, '50-5001-0101', 'active');
