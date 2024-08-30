import { pool } from "../config/config.js";

const  getProductsDb = async () =>{
    let [data] = await pool.query('SELECT * FROM Products')
    return data
}

const getProductsIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM Products WHERE product_id = ?', [id])
    return data
}
 
const insertProductsDb = async( prodName , stock_quantity , price , category , prodURL) => {
    let [data] = await pool.query(`
        INSERT INTO Products (prodName , stock_quantity , price , category , prodURL)
        VALUES(?,?,?,?,?)
        `, [prodName , stock_quantity , price , category , prodURL]
    )
    return data
}

const deleteProductsDb = async(id) => {
    await pool.query('DELETE FROM Products WHERE product_id =?', [id])
}

const updateProductsDb = async (prodName , stock_quantity , price , category , prodURL,  id)=>{
    await pool.query('UPDATE Products SET prodName = ? , stock_quantity = ? , price = ? , category = ? , prodURL = ? WHERE product_id = ?', [prodName , stock_quantity , price , category , prodURL, id])
}

export {getProductsDb , getProductsIDDb , insertProductsDb , deleteProductsDb , updateProductsDb} 