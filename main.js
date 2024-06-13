import { 
    getAllLastNameASC, 
    getAllLastNameDESC,
    // 3. Detalles de un cliente específico (por ejemplo, customerNumber = 101):
    getCustomerByNumber,
    //4. Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):
    getPaymentsByCustomerNumber,
    // 9. Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):
    getCustomersByCity,
    ////////////////////////////////////////// MULTITABLA //////////////////////////////////////
    //3. Listar todos los clientes junto con su representante de ventas:
    getCustomerSalesReps
} from "./js/module/customers.js";

import { getAll, 
    getAllLastName, 
    getAllFullNameJob, 
    getAllJobTitle,
    //2. Lista de empleados que trabajan en una oficina específica (por ejemplo, '1')
    getEmployeesByOfficeCode,
    // 7. Lista de todos los empleados con su jefe (si tienen):
    getEmployeesWithReportsTo,
    ////////////////////////////////////////// MULTITABLA //////////////////////////////////
    //2. Listar todos los empleados junto con la oficina en la que trabajan:
    getEmployeesWithOffices
} from "./js/module/employees.js";

import{
    // 1. Obtener todos los productos en stock:
    getAllProducts,
    // 6. Cantidad total de productos en stock:
    getQuantityInStock,
    //10. Productos con precio de compra mayor a 50:
    getProductsByPrice,
    //////////////////////////////////// MULTITABLAS /////////////////////////////////////
    //4. Obtener el nombre y la cantidad total ordenada de cada producto:
    getProductTotalOrdered,
    ////////////////////////////////// MULTITABLA ////////////////////////////////
    //8. Obtener una lista de todos los productos, junto con sus líneas de productos y el total de cantidad ordenada:
    getProductSalesSummary
} from "./js/module/products.js"

import{
    // 5. Obtener todos los pedidos con estado 'Shipped':
    getOrdersByStatus,
    /////////////////////////////////////////////////// MULTITABLA ////////////////////////////////////
    // 1. Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:
    getCustomerOrdersWithDetails,
    ////////////////////////////////////////// MULTITABLA ////////////////////////////////////////////////////////
    //6. Obtener detalles de los pedidos, incluyendo la información del cliente y los productos ordenados:
    getOrderDetails,
    ////////////////////////////////////// MULTITABLA /////////////////////////////////////////
    //9. Listar todos los pedidos con detalles del cliente y el nombre del representante de ventas:
    getOrderDetailsWithCustomerInfo
} from "./js/module/orders.js"

import{
    // 8. Detalles de oficinas en un país específico (por ejemplo, 'USA')
    getOfficesByCountry,
    //////////////////////// MULTITABLA /////////////////////////
    //5. Listar todas las oficinas y el número de empleados en cada una:
    getOfficeEmployeeCount
} from "./js/module/offices.js"

import{
    ////////////////////////////////////// MULTITABLA //////////////////////////////////////////////////////
    //7. Listar todos los pagos realizados, junto con la información del cliente y su representante de ventas:
    getPaymentDetails,
    //////////////////////////////////// MULTITABLAS /////////////////////////////////////////////////
    //10. Obtener el total de pagos realizados por cada cliente y el nombre del representante de ventas asignado:
    getCustomerPaymentSummary
}   from "./js/module/payments.js"

console.log(await getCustomerPaymentSummary());