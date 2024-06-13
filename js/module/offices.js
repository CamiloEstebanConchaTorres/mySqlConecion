import { connection } from "../../helpers/conexion.js";


// 8. Detalles de oficinas en un país específico (por ejemplo, 'USA')

export const getOfficesByCountry = async (country) => {
    const [result] = await connection.query(
        'SELECT * FROM offices WHERE country = "USA"',
        [country]
    );
    return result;
}

//////////////////////// MULTITABLA /////////////////////////
//5. Listar todas las oficinas y el número de empleados en cada una:

export const getOfficeEmployeeCount = async () => {
    const query = `
        SELECT offices.officeCode, offices.city, COUNT(employees.employeeNumber) AS numEmpleados
        FROM offices
        LEFT JOIN employees ON offices.officeCode = employees.officeCode
        GROUP BY offices.officeCode, offices.city
    `;
    const [result] = await connection.query(query);
    return result;
}
