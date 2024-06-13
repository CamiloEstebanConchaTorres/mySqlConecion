import { connection } from "../../helpers/conexion.js";


export const getAllLastName = async()=>{
    const [result] = await connection.query(`SELECT lastName FROM employees`);
    return result;
}

export const getAllFullNameJob = async()=>{
    const [result] = await connection.query(`SELECT CONCAT(firstName," ", lastName) as 'fullName', jobTitle FROM employees`);
    return result;
}

export const getAll = async()=>{
    const [result] = await connection.query(`SELECT lastName, firstName, extension, email, officeCode, reportsTo, jobTitle FROM employees`);
    return result;
}

export const getAllJobTitle = async({cargo} = {cargo: "Sales Rep"})=>{
    const [result] = await connection.execute(`SELECT CONCAT(firstName," ", lastName) as 'fullName' FROM employees where jobTitle = ?`, [cargo] );
    result["count"] = result.length;
    return result;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Lista de empleados que trabajan en una oficina específica (por ejemplo, '1')

export const getEmployeesByOfficeCode = async (officeCode) => {
    const [result] = await connection.query(
        `SELECT firstName, lastName FROM employees WHERE officeCode = 1`, 
        [officeCode]
    );
    return result;
}

// 7. Lista de todos los empleados con su jefe (si tienen):

export const getEmployeesWithReportsTo = async () => {
    const [result] = await connection.query(
        'SELECT employeeNumber, firstName, lastName, reportsTo FROM employees WHERE reportsTo IS NOT NULL ORDER BY firstName'
    );
    return result;
}

////////////////////////////////////////// MULTITABLA //////////////////////////////////
//2. Listar todos los empleados junto con la oficina en la que trabajan:

export const getEmployeesWithOffices = async () => {
    const query = `
        SELECT * 
        FROM employees e
        INNER JOIN offices o ON e.officeCode = o.officeCode
    `;
    const [result] = await connection.query(query);
    return result;
}