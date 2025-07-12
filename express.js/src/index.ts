import express from 'express';
import connectDB from './config/db';
import itemsRoutes from './routes/itemRoutes'
import errorHandler from './middlewares/errorHandler';

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(errorHandler)
app.use('/api/items', itemsRoutes)

// connect db
connectDB()

// get : get the data

app.get('/', (req, res) =>{ // res : server بيرد , req server جايله طلب
    res.send("Hello To Node JS Course")
})


// post : send the data

// put  : update the data

// delete : delete the data 


app.listen(PORT, () => {
    console.log(`Server is work on http://localhost:${PORT}`);
})

// Endpoints


// Route

// api/item  POST   انشاء حاجة جديدة

// api/item  GET    تجيب كل الحاجات

// api/item/:id  GET تجيب حاجة واحدة بس 

// api/item/:id  PUT تعدل حاجة

// api/item/:id DELETE تحذف حاجة


// NoSQL => Document  ORM: mongoose

// SQl => Tables