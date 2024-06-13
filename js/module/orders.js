import { connection } from "../../helpers/conexion.js";

// 5. Obtener todos los pedidos con estado 'Shipped':

export const getOrdersByStatus = async (status) => {
    const [result] = await connection.query(
        'SELECT * FROM orders WHERE status = "Shipped"',
        [status]
    );
    return result;
}


/////////////////////////////////////////////////// MULTITABLA ////////////////////////////////////
// 1. Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:

export const getCustomerOrdersWithDetails = async (customerNumber) => {
    const query = `
        SELECT o.orderNumber, o.orderDate, p.productCode, p.productName, od.quantityOrdered, od.priceEach
        FROM orders o
        INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber
        INNER JOIN products p ON od.productCode = p.productCode
        WHERE o.customerNumber = 112
    `;
    const [result] = await connection.query(query, [customerNumber]);
    return result;
}

////////////////////////////////////////// MULTITABLA ////////////////////////////////////////////////////////
//6. Obtener detalles de los pedidos, incluyendo la información del cliente y los productos ordenados:

export const getOrderDetails = async () => {
    const query = `
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
    `;
    const [result] = await connection.query(query);
    return result;
}


////////////////////////////////////// MULTITABLA /////////////////////////////////////////
//9. Listar todos los pedidos con detalles del cliente y el nombre del representante de ventas:

export const getOrderDetailsWithCustomerInfo = async () => {
    const query = `
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
    `;
    const [result] = await connection.query(query);
    return result;
}