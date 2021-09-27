/* usuwam maxId, poniewaz maja mapowanie na minId */

delete from dbo.[Customer] where Id IN(
select maxId 
--select c.*, cumMin.CustomerId as minCUM, cumMax.CustomerId as maxCum--, oMin.CustomerId as minOrderCId, oMax.CustomerId as maxOrderCustomerId
from
(select companyId, subiektId, count(*) as total, min(Id) as minId, max(Id) as maxId
from dbo.customer 
where subiektId > 0
group by companyId, SubiektId having count(*) > 1) c
left join dbo.CustomerUserMapping cumMin on cumMin.CustomerId = minId
left join dbo.CustomerUserMapping cumMax on cumMax.CustomerId = maxId
where cumMin.CustomerId is not null)

/* usuwam minId, poniewaz maja mapowanie na maxId */
delete from dbo.[Customer] where Id IN(
select minId 
--select c.*, cumMin.CustomerId as minCUM, cumMax.CustomerId as maxCum--, oMin.CustomerId as minOrderCId, oMax.CustomerId as maxOrderCustomerId
from
(select companyId, subiektId, count(*) as total, min(Id) as minId, max(Id) as maxId
from dbo.customer 
where subiektId > 0
group by companyId, SubiektId having count(*) > 1) c
left join dbo.CustomerUserMapping cumMin on cumMin.CustomerId = minId
left join dbo.CustomerUserMapping cumMax on cumMax.CustomerId = maxId
where cumMax.CustomerId is not null)


/* zostawiam minId tam gdzie nie ma mapowania ani na min ani na max */

delete from dbo.[Customer] where Id IN(
select maxId 
--select c.*, cumMin.CustomerId as minCUM, cumMax.CustomerId as maxCum--, oMin.CustomerId as minOrderCId, oMax.CustomerId as maxOrderCustomerId
from
(select companyId, subiektId, count(*) as total, min(Id) as minId, max(Id) as maxId
from dbo.customer 
where subiektId > 0
group by companyId, SubiektId having count(*) > 1) c
left join dbo.CustomerUserMapping cumMin on cumMin.CustomerId = minId
left join dbo.CustomerUserMapping cumMax on cumMax.CustomerId = maxId
where cumMax.CustomerId is null and cumMin.CustomerId is null)