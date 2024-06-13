import { connection } from "../../helpers/conexion.js";


// 1. Obtener todos los productos en stock:
export const getAllProducts = async () => {
    const [result] = await connection.query(`SELECT productName, quantityInStock FROM products`);
    return result;
}

// 6. Cantidad total de productos en stock:

export const getQuantityInStock = async () => {
    const [result] = await connection.query(
        'SELECT quantityInStock FROM products'
    );
    return result;
}

//10. Productos con precio de compra mayor a 50:

export const getProductsByPrice = async (price) => {
    const [result] = await connection.query(
        'SELECT * FROM products WHERE buyPrice > 50',
        [price]
    );
    return result;
}

//////////////////////////////////// MULTITABLAS /////////////////////////////////////
//4. Obtener el nombre y la cantidad total ordenada de cada producto:

export const getProductTotalOrdered = async () => {
    const query = `
        SELECT products.productName, SUM(orderdetails.quantityOrdered) AS total_ordered
        FROM products
        JOIN orderdetails ON products.productCode = orderdetails.productCode
        GROUP BY products.productName
    `;
    const [result] = await connection.query(query);
    return result;
}


////////////////////////////////// MULTITABLA ////////////////////////////////
//8. Obtener una lista de todos los productos, junto con sus líneas de productos y el total de cantidad ordenada:

export const getProductSalesSummary = async () => {
    const query = `
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
    `;
    const [result] = await connection.query(query);
    return result;
}