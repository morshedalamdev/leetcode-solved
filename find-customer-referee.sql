-- PROBLEM:
-- Find the names of the customer that are either:
-- 1. referred by any customer with id != 2.
-- 2. not referred by any customer.
-- 3. Return the result table in any order.


-- SOLVE:
SELECT name
FROM Customer
WHERE referee_id IS NULL OR referee_id != 2