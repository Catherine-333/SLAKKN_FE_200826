create database catherine;

drop database catherine;

create database Catherine;
use Catherine;
create table Beginner(
student_id int primary key auto_increment,
student_Name varchar(20),
student_age int check(student_age>=20),
student_email varchar(30) unique,
student_city varchar(50) default"Chennai",
created_by varchar(30) default"catherine",
created_date timestamp default current_timestamp,
status boolean default true
);