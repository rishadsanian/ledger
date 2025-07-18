<img src="https://github.com/rishadsanian/ledger/assets/77033627/10290488-d4ea-4b3c-bd1d-f8b4e7d078ba " alt="Ledger"> 


## Double Entry Accounting System


### Ledger is a double-entry accounting system targeted towards individuals, contractors, self-employed individuals, and small businesses, allowing this target market to conveniently record their business or personal transactions  for better record keeping, analysis, and decision-making. Tech stacks used include - PostgreSQL, Express, React, and Node. 

### Planned Features

- Accounts
- Transaction Entry
- General Ledger
- General Journal
- Financial statements
- Dashboard with key business metrics, analytics and charts/graphs.

### Stretch Features
- Personnel/Department Portal and Roles
- Automated transactions
- Report Exports
- ML data analytics
- Budgeting 



### Progress Screenshots [to be developed further]

![image](https://github.com/rishadsanian/ledger/assets/77033627/bca4cadb-2f6e-458e-b34d-3bf401942d56)



## Environment Setup

1. Duplicate `ledger/server/.env.example` as `ledger/server/.env` and fill in your database credentials.
2. The `.env` file is listed in `.gitignore` and should **never** be committed or printed in logs.

## Resetting the Database

The server provides a script to rebuild the database from the schema and seed files.

```bash
cd ledger/server
npm run db:reset
```

This command drops existing tables and repopulates them with seed data. Ensure you have backups before running it in production.
