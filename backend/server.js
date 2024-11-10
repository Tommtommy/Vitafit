// Сервер

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database холбох

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB холбогдлоо'))
  .catch((error) => console.error('MongoDB холболт алдаа:', error));


const User = require('./models/User');
const ProductModel = require("./models/Product")
const Category = require('./models/Category');

//Хэрэглэгч route

// Бүртгэл хийх
app.post('/signup', async (req, res) => {
  const { name, phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      phone,
      password: hashedPassword,
      isAdmin: phone === '99141280', //Админ болгов
    });
    await newUser.save();
    res.status(201).json({ message: 'Хэрэглэгч амжилттай бүртгэгдлээ' });
  } catch (error) {
    console.error('Бүртгэлийн алдаа:', error);
    res.status(500).json({ error: 'Бүртгэл алдаа гарлаа' });
  }
});

// Нэвтрэх 

app.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ error: 'Утасны дугаар эсвэл нууц үг буруу байна' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Утасны дугаар эсвэл нууц үг буруу байна' });
    }

    // JWT токен үүсгэх
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Амжилттай нэвтэрлээ', token, isAdmin: user.isAdmin});
  } catch (error) {
    console.error('Нэвтрэх алдаа:', error);
    res.status(500).json({ error: 'Серверийн алдаа' });
  }
});

// Нийт хэрэглэгчийг API ашиглан тоог авах
app.get('/api/user-count', async (req, res) => {
  try {
    const count = await User.countDocuments(); 
    res.json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Серверийн алдаа' });
  }
});

// Бүх хэрэглэгчийн мэдээллийг авах API
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Серверийн алдаа" });
  }
});

// Хэрэглэгч устгах API
app.delete('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.findByIdAndDelete(userId); // Хэрэглэгчийг ID-аар нь устгах
    if (!result) {
      return res.status(404).json({ error: "Хэрэглэгч олдсонгүй" });
    }
    res.status(200).json({ message: "Хэрэглэгч амжилттай устгагдлаа" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Серверийн алдаа" });
  }
});

// Бүтээгдэхүүн route

// Бүтээгдэхүүн үүсгэх

app.post('/api/products', async(req, res) => {
  try {
    const {name, mainPrice, saledPrice, description, quantity, hidden,category} = req.body

    if (!name) {
      throw new Error("400")
    }

    const Product = await ProductModel.create({name, mainPrice, saledPrice, description, quantity, hidden, category})
    res.status(200).json(Product)
  } catch (err) {
    if (err.message === "400") {
      res.status(400).json({error: "Бүтээгдэхүүний нэрийг оруулна уу!"})
    } else {   
       res.status(500).json({error: 'Серверийн алдаа'})
      }
  }
})

// Бүтээгдэхүүн хайх

app.get('/api/products', async(req, res) => {
  try {
    const Products = await ProductModel.find();
    res.status(200).json(Products)
  } catch(err) {
    res.status(500).json({error: "Серверийн алдаа"})
  }
})

// Бүтээгдэхүүн авах

app.get('/api/products/:id', async(req, res) => {
  try {
    const Product = await ProductModel.findById(req.params.id);
    res.status(200).json(Product)
  } catch(err) {
    res.status(500).json({error: "Серверийн алдаа"})
  }
}) 



app.put('/api/products/:id', async(req, res) => {
  try {
    let Product = await ProductModel.findById(req.params.id);
    const {name, mainPrice, saledPrice, description, quantity, hidden, category} = req.body;

    const data = {
      ...(name && {name}),
      ...(mainPrice && {mainPrice}),
      ...(saledPrice && {saledPrice}),
      ...(description && {description}),
      ...(quantity && {quantity}),
      ...(hidden && {hidden}),
      ...(category && {category}),
      updated_at: Date.now()
    }

 

    console.log(data)
    Product = await Product.updateOne(data)

    res.status(200).json(Product)
  } catch(err) {
    res.status(500).json({error: "Серверийн алдаа"})
  }
}) 

app.delete('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await ProductModel.findByIdAndDelete(productId);
    if (!result) {
      return res.status(404).json({ error: "Бүтээгдэхүүн олдсонгүй" });
    }
    res.status(200).json({ message: "Бүтээгдэхүүн амжилттай устгагдлаа" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Серверийн алдаа" });
  }
});

// Kатегори route

// Бүх ангилалыг авах
app.get('/api/categories', async (req, res) => {
try {
const categories = await Category.find();
res.status(200).json(categories);
} catch (error) {
console.error("Error fetching categories:", error);
res.status(500).json({ error: "Серверийн алдаа" });
}
});

// Ангилал нэмэх

app.post('/api/categories', async (req, res) => {
const { name } = req.body;
if (!name) {
return res.status(400).json({ error: 'Ангилалд нэр хэрэгтэй' });
}

try {
const newCategory = new Category({ name });
await newCategory.save();
res.status(201).json(newCategory);
} catch (error) {
res.status(500).json({ error: 'Server error adding category' });
}
});

//Ангилал устгах

app.delete('/api/categories/:id', async (req, res) => {
try {
const categoryId = req.params.id;
const result = await Category.findByIdAndDelete(categoryId);
if (!result) {
  return res.status(404).json({ error: 'Category not found' });
}
res.status(200).json({ message: 'Category deleted successfully' });
} catch (error) {
res.status(500).json({ error: 'Server error deleting category' });
}
});


// Сервер тохиргоо
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер ${PORT} порт дээр ажиллаж байна`));
