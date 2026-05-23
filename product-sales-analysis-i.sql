-- PROBLEM:
-- Write a solution to report the product_name, year, and price for each sale_id in the Sales table.
-- Return the resulting table in any order.

-- SOLVE:
SELECT p.product_name, s.year, s.price
FROM Sales s
JOIN Product p ON p.product_id = s.product_id