import { connection } from "../../helpers/conexion.js";

////////////////////////////////////// MULTITABLA //////////////////////////////////////////////////////
//7. Listar todos los pagos realizados, junto con la información del cliente y su representante de ventas:

export const getPaymentDetails = async () => {
    const query = `
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
    `;
    const [result] = await connection.query(query);
    return result;
}


//////////////////////////////////// MULTITABLAS /////////////////////////////////////////////////
//10. Obtener el total de pagos realizados por cada cliente y el nombre del representante de ventas asignado:

export const getCustomerPaymentSummary = async () => {
    const query = `
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
    `;
    const [result] = await connection.query(query);
    return result;
}