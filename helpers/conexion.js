import mysql from 'mysql2/promise';
export const connection = await mysql.createConnection({
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  database: 'railway',
  port: 51441,
  password: 'iWdehsRkAlsCjsiAMEzVOjnxoaXpMfCP'
});