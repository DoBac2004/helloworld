use Employee1234
go
create table Department_table(
DepartID int Primary key ,
DepartName varchar(50) not null,
Description varchar(100) not null
)
go
insert into Department_table(DepartID,DepartName,Description) values ('1','Depart1','Team3')
insert into Department_table(DepartID,DepartName,Description) values ('2','Depart2','Team2')
insert into Department_table(DepartID,DepartName,Description) values ('3','Depart3','Team1')




create table Employee_table(
EmpCode char(6) primary key,
DepartID INT,
CONSTRAINT hk FOREIGN KEY (DepartID) REFERENCES Department_table(DepartID),
FirstName varchar(30) not null,
LastName varchar(30) not null,
Birthday smalldatetime not null,
Gender bit Default(1),
Address varchar(100),
 Salary Money
 )
 select * from Department_table
 SELECT * FROM Employee_table 
 insert into Employee_table(EmpCode,DepartID,FirstName,LastName,Birthday,Gender,Address,Salary) values ('QTW123','1','Tran','Hieu','2000-12-22','1','Ha Noi','1000')
  insert into Employee_table(EmpCode,DepartID,FirstName,LastName,Birthday,Gender,Address,Salary) values('DHWU45','2','Nguyen','Dao','2000-11-30','0','HA NOi','2000')
  insert into Employee_table(EmpCode,DepartID,FirstName,LastName,Birthday,Gender,Address,Salary) values('Wuy678','3','Do','Bac','2004-3-20','1','Thai Binh','3000')

  --4--
update Employee_table set Salary = Salary + Salary * 0.1
--5--
Alter table Employee_table 
Add Check (Salary > 0)
