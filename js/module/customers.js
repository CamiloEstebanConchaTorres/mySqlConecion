import { connection } from "../../helpers/conexion.js";

export const getAllLastNameASC = async()=>{
    const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname`);
    return result;
}

export const getAllLastNameDESC = async()=>{
    const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC`);
    return result;
}


///////////////////////////////////////////////////////////////////////////////////////7


// 3. Detalles de un cliente específico (por ejemplo, customerNumber = 101):

export const getCustomerByNumber = async (customerNumber) => {
    const [result] = await connection.query(
        'SELECT * FROM customers WHERE customerNumber = 112',
        [customerNumber]
    );
    return result;
}

//4. Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):

export const getPaymentsByCustomerNumber = async (customerNumber) => {
    const [result] = await connection.query(
        'SELECT * FROM payments WHERE customerNumber = 112',
        [customerNumber]
    );
    return result;
}

// 9. Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):

export const getCustomersByCity = async (city) => {
    const [result] = await connection.query(
        'SELECT * FROM customers WHERE city = "Madrid"',
        [city]
    );
    return result;
}


////////////////////////////////////////// MULTITABLA //////////////////////////////////////
//3. Listar todos los clientes junto con su representante de ventas:

export const getCustomerSalesReps = async () => {
    const query = `
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
            employees e ON c.salesRepEmployeeNumber = e.employeeNumber
    `;
    const [result] = await connection.query(query);
    return result;
}