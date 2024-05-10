-- Seed data for common accounts
INSERT INTO accounts (name, account_number, balance, account_type, fk_class_id, fk_user_id)
VALUES 
  ('Cash', '1000', 0, 'Debit', '10', 1), -- Asset
  ('Accounts Receivable', '1100', 0, 'Debit', '10', 1), -- Asset
  ('Accounts Payable', '2000', 0, 'Credit', '20', 1), -- Liability
  ('Revenue', '3000', 0, 'Credit', '30', 1), -- Revenue
  ('Expense', '4000', 0, 'Debit', '40', 1), -- Expense
  ('Capital', '5100', 0, 'Credit', '50', 1), -- Equity: Capital
  ('Retained Earnings', '5200', 0, 'Credit', '50', 1); -- Equity: Retained Earnings