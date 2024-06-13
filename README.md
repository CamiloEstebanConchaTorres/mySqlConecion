1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   select firstName, lastName from employees WHERE `officeCode` = 1
   ```

3. quantity**Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select * from customers WHERE `customerNumber` = 112;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select *  from payments WHERE `customerNumber` = 112;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   select * from orders WHERE `status` = "Shipped"; 
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   select quantityInStock from products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   select employeeNumber, firstName, lastName, reportsTo FROM employees WHERE reportsTo NOT IN ('NULL') ORDER BY firstName;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   select * from offices WHERE `country` = "USA";
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   select * from customers  WHERE `city` = "Madrid";
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    select * from products  WHERE `buyPrice` > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT o.orderNumber, o.orderDate, p.productCode, p.productName, od.quantityOrdered, od.priceEach FROM orders o INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber INNER JOIN products p ON od.productCode = p.productCode WHERE o.customerNumber = 112;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
    select * from employees INNER JOIN offices;
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT 
       c.customerNumber,
       c.customerName,
       e.firstName AS salesRepFirstName,
       e.lastName AS salesRepLastName,
       e.employeeNumber,
       e.officeCode
   FROM 
       customers c
   JOIN 
       employees e ON c.salesRepEmployeeNumber = e.employeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT products.productName, SUM(orderdetails.quantityOrdered) AS total_ordered
   FROM products
   JOIN orderdetails ON products.productCode = orderdetails.productCode
   GROUP BY products.productName;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   SELECT offices.officeCode, offices.city, COUNT(employees.employeeNumber) AS numEmpleados
   FROM offices
   LEFT JOIN employees ON offices.officeCode = employees.officeCode
   GROUP BY offices.officeCode, offices.city;
   ```
-------------------------------------------------------------------------

**Consultas Extras** 



6. **Obtener detalles de los pedidos, incluyendo la información del cliente y los productos ordenados:**

   ```sql
   SELECT 
    o.orderNumber,
    o.orderDate,
    c.customerNumber,
    c.customerName,
    c.contactFirstName,
    c.contactLastName,
    c.phone,
    c.addressLine1,
    c.addressLine2,
    c.city,
    c.state,
    c.postalCode,
    c.country,
    p.productCode,
    p.productName,
    od.quantityOrdered,
    od.priceEach,
    (od.quantityOrdered * od.priceEach) AS totalPrice
FROM 
    orders o
INNER JOIN 
    customers c ON o.customerNumber = c.customerNumber
INNER JOIN 
    orderdetails od ON o.orderNumber = od.orderNumber
INNER JOIN 
    products p ON od.productCode = p.productCode
ORDER BY 
    o.orderNumber;

   ```

7. **Listar todos los pagos realizados, junto con la información del cliente y su representante de ventas:**

   ```sql
   SELECT 
    p.customerNumber,
    c.customerName,
    p.checkNumber,
    p.paymentDate,
    p.amount,
    c.salesRepEmployeeNumber,
    e.firstName AS salesRepFirstName,
    e.lastName AS salesRepLastName,
    e.email AS salesRepEmail
FROM 
    payments p
INNER JOIN 
    customers c ON p.customerNumber = c.customerNumber
INNER JOIN 
    employees e ON c.salesRepEmployeeNumber = e.employeeNumber
ORDER BY 
    p.paymentDate;

   ```

8. **Obtener una lista de todos los productos, junto con sus líneas de productos y el total de cantidad ordenada:**

   ```sql
   SELECT 
    p.productCode,
    p.productName,
    pl.productLine,
    SUM(od.quantityOrdered) AS totalQuantityOrdered
FROM 
    products p
INNER JOIN 
    productlines pl ON p.productLine = pl.productLine
INNER JOIN 
    orderdetails od ON p.productCode = od.productCode
GROUP BY 
    p.productCode,
    p.productName,
    pl.productLine
ORDER BY 
    p.productCode;

   ```

9. **Listar todos los pedidos con detalles del cliente y el nombre del representante de ventas:**

   ```sql
   SELECT 
    o.orderNumber,
    o.orderDate,
    o.status,
    c.customerNumber,
    c.customerName,
    c.contactFirstName,
    c.contactLastName,
    c.phone,
    c.addressLine1,
    c.addressLine2,
    c.city,
    c.state,
    c.postalCode,
    c.country,
    e.firstName AS salesRepFirstName,
    e.lastName AS salesRepLastName
FROM 
    orders o
INNER JOIN 
    customers c ON o.customerNumber = c.customerNumber
INNER JOIN 
    employees e ON c.salesRepEmployeeNumber = e.employeeNumber
ORDER BY 
    o.orderNumber;

   ```

10. **Obtener el total de pagos realizados por cada cliente y el nombre del representante de ventas asignado:**

   ```sql
   SELECT 
    c.customerNumber,
    c.customerName,
    e.firstName AS salesRepFirstName,
    e.lastName AS salesRepLastName,
    SUM(p.amount) AS totalPayments
FROM 
    customers c
INNER JOIN 
    payments p ON c.customerNumber = p.customerNumber
INNER JOIN 
    employees e ON c.salesRepEmployeeNumber = e.employeeNumber
GROUP BY 
    c.customerNumber,
    c.customerName,
    e.firstName,
    e.lastName
ORDER BY 
    totalPayments DESC;

   ```

