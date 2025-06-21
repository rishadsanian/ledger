-- Seed data for transactions table
INSERT INTO transactions (fk_master_account, fk_user_id, amount, timestamp, reference, note)
VALUES
  ('10-1001-0000', 1, 0, '2022-01-01', 'Initial Balance', 'Initial balance for Cash account'),
  ('10-1001-0101', 1, 0, '2022-01-01', 'Initial Balance', 'Initial balance for Petty Cash account');
