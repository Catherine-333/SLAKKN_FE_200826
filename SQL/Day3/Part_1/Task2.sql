create database Employee_Management;
use Employee_Management;
create table employees(
Employee_ID int primary key auto_increment,
Employee_name varchar(20),
Employee_salary varchar(30),
Employee_department varchar(100),
joiningdate varchar(100) default "Admin",
Employee_city varchar(60),
status boolean default true
);
-- Change salary datatype
ALTER TABLE employees MODIFY Employee_salary DECIMAL(12,2);

-- Add email column
ALTER TABLE employees ADD Employee_email VARCHAR(100);


