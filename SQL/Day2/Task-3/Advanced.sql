create database jesus;
use jesus;
create table Advanced(
product_id int primary key auto_increment,
product_name varchar(100) not null,
product_code varchar(50) unique,
category varchar(100) not null,
price DECIMAL(10,2) CHECK (price > 10),
stock int default 0,
brand VARCHAR(50) DEFAULT 'Generic',
created_by varchar(50) default"Catherine",
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
status boolean default true
);