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
   
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   
   ```

