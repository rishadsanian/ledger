-- Drop existing tables
DROP TABLE IF EXISTS user_company CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS roles CASCADE;

-- Create roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    role_id INT REFERENCES roles(id)
);

-- Create companies table
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    administrator_id INT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    year_end DATE NOT NULL,
    industry VARCHAR(255) NOT NULL,
    number_employees INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    description TEXT,
    CONSTRAINT fk_administrator
      FOREIGN KEY(administrator_id) REFERENCES users(id) DEFERRABLE INITIALLY DEFERRED
);

-- Update users table to add fk_company_id after companies table is created
ALTER TABLE users ADD fk_company_id INT REFERENCES companies(id) ON DELETE SET NULL;

-- Create user_company join table
CREATE TABLE user_company (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    company_id INT REFERENCES companies(id) ON DELETE CASCADE,
    role_id INT REFERENCES roles(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_fk_company_id ON users(fk_company_id);
CREATE INDEX idx_user_company_user_id ON user_company(user_id);
CREATE INDEX idx_user_company_company_id ON user_company(company_id);
CREATE INDEX idx_user_company_role_id ON user_company(role_id);

-- Sample roles
INSERT INTO roles (name) VALUES ('admin'), ('user');
