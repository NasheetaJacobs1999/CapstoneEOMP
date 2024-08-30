import { pool } from "../config/config.js";

const  getUserDb = async () =>{
    let [data] = await pool.query('SELECT * FROM Users')
    return data 
}
// console.log(await getUserDb());

const getUserIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM Users WHERE user_id = ?', [id])
    return data
}
 
const insertUserDb = async(username, email, password) => {
    let [data] = await pool.query(`
        INSERT INTO Users (username, email, password)
        VALUES(?,?,?)
        `, [username, email, password]
    )
    return data
}

const deleteUserDb = async(id) => {
    await pool.query('DELETE FROM Users WHERE user_id =?', [id])
}

const updateUserDb = async (username, email, password, id)=>{
    await pool.query('UPDATE Users SET username = ? , email = ? , password = ? WHERE user_id = ?', [username, email, password, id])
}

const getEmailDb = async (email) => {
    let [[data]] = await pool.query('SELECT * FROM Users WHERE email =?' , [email])
    return data
}

export {getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb , getEmailDb} 