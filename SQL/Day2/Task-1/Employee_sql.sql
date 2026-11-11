create database Employee;

drop database Employee;
create database Employee;
use Employee;
CREATE TABLE Intermediate (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(30),
    employee_age INT,
    employee_email VARCHAR(50) UNIQUE,
    employee_city VARCHAR(30) DEFAULT 'Chennai',
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status BOOLEAN DEFAULT TRUE
);