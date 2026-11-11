create database student;
use student;

create table usertable(
userid int primary key auto_increment,
username varchar(20),
usermobile int(10),
userdepartmant varchar(20),
createby varchar(30) default "Admin",
createdate timestamp default current_timestamp,
updateby varchar(30),
updatedate timestamp default current_timestamp,
status boolean default true

);




alter table usertable add usermail varchar(20);
alter table usertable add userage int after usermobile;
alter table usertable add createby int first;







