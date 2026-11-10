create table name(
id int primary key auto_increment,
studentname varchar(30) not null,
studentage int check(studentage>=18),
gender varchar(30),
course varchar(30) default "Tech",
email varchar(40)unique,
admisstiondate datetime,
createby varchar(30)default"admin",
createdate timestamp default current_timestamp,
isActive booleaan default true
);