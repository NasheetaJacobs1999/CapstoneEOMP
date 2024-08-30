import { getProductsDb , getProductsIDDb , insertProductsDb , deleteProductsDb , updateProductsDb } from "../model/productsDB.js";

const getProducts =  async(req,res)=> {
    res.json(await getProductsDb());
}

const getProductsId =  async(req,res)=> {
    console.log(req.params.id);
    res.json(await getProductsIDDb(req.params.id))
}

const insertProducts = async (req,res) => {
    let {prodName , stock_quantity , price , category , prodURL} = req.body
    await insertProductsDb(prodName , stock_quantity , price , category , prodURL)
    res.send('Data was inserted successfully')
}

const deleteProducts = async (req,res) => {
    let {id} = req.body
    await deleteProductsDb(req.params.id)
    res.send('Data has been deleted')
}

const updateProducts =  async(req,res)=>{
    let {prodName , stock_quantity , price , category , prodURL} = req.body
    let user = await getProductsDb(req.params.id)
    prodName?prodName = prodName:prodName = user.prodName;
    stock_quantity?stock_quantity = stock_quantity:stock_quantity = user.stock_quantity;
    price?price = price:price = user.price;
    category?category = category:category = user.category;
    prodURL?prodURL = prodURL:prodURL = user.prodURL;

    await updateProductsDb( prodName , stock_quantity , price , category , prodURL , req.params.id);
    res.send('Data has been updated successfully.')
}

export {getProducts , getProductsId , insertProducts, deleteProducts , updateProducts }