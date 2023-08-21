import sql from 'mssql';

// connection configs
const config = {
    user: 'sa',
    password: 'MyPass@word',
    server: '127.0.0.1',
    database: 'eShoppingCodi',
    port: 1433,
    options: {
        instancename: '127.0.0.1',
        trustedconnection: true,
        trustServerCertificate: true
    },
}

export default async function ExcuteQuery(query:string, options?:any) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(query);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}