-- PROBLEM:
-- Write a solution to find the name, population, and area of the big countries.
-- Return the result table in any order.

-- SOLVE:
SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000