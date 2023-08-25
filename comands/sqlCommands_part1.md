## 1- use DATABASE_NAME ==> USE store
## 2- ==> to get data  SELECT * FROM customers
## 3- ==> to get data specific data  SELECT * FROM customers WHERE customer_id = 1
## 4- ==> to get data specific data  SELECT * FROM customers WHERE customer_id = 1 order by first_name
## 5- ==> to get data specific data  with comment
 SELECT * FROM customers 
-- WHERE customer_id = 1
 order by first_name

## 6- ==> SELECT first_name ,last_name , points +10  FROM customers ==. make arth operator (+ ,-,*,/,%)
## 7- ==> SELECT first_name ,last_name , points +10 AS discount  FROM customers  ==> add elias name using ==> AS
## 8- ==> SELECT distinct state From customers ==> slect unique state , no state will dupilcated
## 9- ==> task ==> SELECT name ,unit_price , unit_price * 1.1 as "new price" from products
                   <!-- ******************* WHERE CONDITION ******************* -->
## 10- ==> SELECT * from customers where points > 3000 ===> (> , < , >= , <= ,==) ==> comparison operator
## 12- ==> SELECT * from customers where state = 'VA' ===> (=) ==> comparison operator
## 13- ==> SELECT * from customers where state != 'VA' ===> (!=) ==> comparison operator
## 14- ==> SELECT * from customers where state <> 'VA' ===> (<>) ==> comparison operator
## 15- ==> SELECT * from customers where birth_date > '1990-01-01' ===> ('1990-01-01'   ==> date foramt) ==> comparison operator
## 16- ==> SELECT * from customers where birth_date >= '1990-01-01' AND points > 1000 ===> (AND )==> comparison operator
## 17- ==> SELECT * from customers where birth_date >= '1990-01-01' OR points > 1000 ===> (OR )==> comparison operator
## AND excute first then OR
## 18- ==> SELECT * from order_items where order_id =6 AND unit_price * quantity > 30  
## 19- ==> SELECT * FROM customers where state  IN ('VA','FL','GA') ==> (IN Operator)
## 20- ==> SELECT * FROM customers where state NOT IN ('VA','FL','GA') ==> (NOT IN Operator)
## 21- ==> SELECT * from customers WHERE points between 1000 AND 3000  ==> (BETWEEN Operator)
## 22- ==> SELECT * from customers where last_name LIKE 'b%'  ==> (LIKE Operator  ==> start with b )
## 23- ==> SELECT * from customers where last_name LIKE '%b'  ==> (LIKE Operator  ==> end with b )
## 24- ==> SELECT * from customers where last_name LIKE '%b%'  ==> (LIKE Operator ==> contain  b char )
## 25- ==> SELECT * from customers where last_name LIKE '_____y%'  ==> (LIKE Operator ==> any word conatin 6 chars and end with y )
## 26- ==> SELECT * from customers where address LIKE '%trail%' OR address LIKE '%avenue%'
## 27- ==> SELECT * from customers where last_name regexp 'field' ==>  ( ===> REGEXP operator)
## 28- ==> SELECT * from customers where last_name regexp 'field|mac' ==>  ( ===> REGEXP using OR operator)
## 29- ==> SELECT * from customers where last_name regexp '^field|mac' ==>  ( ===> REGEXP  ^ ==> start  , $ ==> end  using OR operator)
## 29- ==> SELECT * from customers where last_name regexp 'field$|mac' ==>  ( ===> REGEXP  ^ ==> start  , $ ==> end  using OR operator)
## 30- ==> SELECT * from customers where last_name regexp '[gim]e' ==>  ( ===> REGEXP  conatin gi or ie or me)
## 31- ==> SELECT * from customers where last_name regexp '[a-h]e' ==> ( ===> REGEXP  conatin from a to h then e)
## REGEXP -- ^ beginning
## REGEXP -- $ end
## REGEXP -- | logical or
## REGEXP -- [abcd]
## REGEXP -- [a-f] range

<!-- JONIS  -->
## inner join ==> SELECT *
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id order by c.customer_id