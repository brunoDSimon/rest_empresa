use empresarest2;

select * from Beads
order by dateEntry asc;
SELECT 
 Companies.companyName,
SUM(Beads.value * Beads.amount) from Beads
inner join Companies
on Beads.companyID = Companies.id
group by Companies.companyName;

SELECT 
DATE_FORMAT(dateEntry, '%m/%Y') AS 'month/year',
sum(Beads.value * Beads.amount) from Beads
group by DATE_FORMAT(dateEntry, '%m/%Y');


SELECT 
Companies.companyName,
DATE_FORMAT(dateEntry, '%m/%Y') AS 'month/year',
SUM(Beads.value * Beads.amount) from Beads
inner join Companies
on Beads.companyID = Companies.id 
group by Companies.companyName, DATE_FORMAT(dateEntry, '%m/%Y')
order by DATE_FORMAT(dateEntry, '%m/%Y');


select 
SUM(Beads.value * Beads.amount), 
sum(Beads.amount) 
from Beads
where year(dateEntry) = 2020;

select * from Users;

select Beads.companyID, Beads.userID, Beads.reference,(Beads.value * Beads.amount - 0.10)as received, Beads.patch, Beads.dateEntry,Beads.id, Users.email, Users.name from beads
inner join Users
on Beads.userID = Users.id;

select 
SUM(Beads.value * Beads.amount- 0.10) AS received
from beads;
