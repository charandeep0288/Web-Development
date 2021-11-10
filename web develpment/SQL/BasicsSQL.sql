





-- SQL_4 9 Nov 2021 Tue
create table student(name varchar(20), school_id);

alter table student add column marks int;


insert into student values ('foo', 1, 98);
insert into student values ('foobar', 2, 60);
insert into student values ('aa', 3, 70);
insert into student values ('aa', 3, 70);
insert into student values ('barr', 3, 40);
insert into student values ('foo', 1, 60);

-- syntax
-- select * or col_names from table_name where condition group by having


select distinct name, marks from student where marks >= 60;

select distinct name, marks from student where marks >= 60 order by marks;

select distinct name, marks from student where marks >= 60 order by marks asc;

select distinct name, marks from student where marks >= 60 order by marks desc;



select * from students where name = 'aa';
select distinct name from students where name = 'aa';

-- group by
select distinct school_id from student;
select school_id from student group by school_id;

-- functions with group by
select school_id, count(name) as number_of_student from student group by school_id;

select school_id,avg(marks), sum(marks)/ count(name) from student group by school_id having sum(marks)/count(name) > 60 order by school_id desc;

select school_id, sum(marks)/ count(name) avg from student group by school_id;


-- name of those students whose marks greater that avg marks of all students
select sum(marks) / count(*) from student 


select name from student where marks > (seke);


-- row wise 
create talble example (val1 int, val2 int);

insert into example values(10, 20). (20, 30);

select concat(val1, val2), val1, val2, val1 + val2 from example;

select concat(val1, val2, val1 + val2) from example;



-- like 
-- % substring
-- _ single character
insert into student values('aaafaaa', 1, 100);
insert into student values('FF', 1, 100);

select * from student where name like 'f';

select * from student where name like 'f__';

select * from student where name like 'f%f';

select count(*) from student where name like '%f%';

select sum(marks) from student where name like '%f%';

-- between
select * from student where marks between 80 and 100 and name ilike '%f%';


select marks, student_id from student group by


-- joins

create table t1(val int);
create table t2(val int);

insert into t1 values (10), (11), (12), (14);
insert into t2 values (11), (12), (13), (15);

select * from t1;
select * from t2;

select * from t1, t2;

select * from t1 cross join t2;

select * from t1 left outer join t2 on t1.val = t2.val;
select t1.val from t1 left outer join t2 on t1.val = t2.val;

select * from t1 right outer join t2 on t1.val = t2.val;

select * from t1 inner join t2 on t1.val = t2.val;