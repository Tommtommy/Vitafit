import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faTh, faFileAlt, faUser, faReceipt, faChartLine, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {``
  const [userCount, setUserCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard'); // Track the active section
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [hidden, setHidden] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:5000/api/user-count')
      .then(response => response.json())
      .then(data => setUserCount(data.count))
      .catch(error => console.error('Error fetching user count:', error));

    fetchProducts();
    fetchUsers();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

   // Шинэ ангилал нэмэх

   const addCategory = async () => {
    if (!categoryName) {
      alert("Ангиллын нэрийг оруулна уу!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: categoryName }),
      });
      if (response.ok) {
        setCategoryName('');
        fetchCategories();
      } else {
        console.error("Error adding category:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  // Ангилал устгах

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCategories(categories.filter(category => category._id !== categoryId));
      } else {
        console.error("Error deleting category:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const fetchProducts = async () => {
    fetch('http://localhost:5000/api/products').then(res => res.json()).then((data) => setProducts(data)).catch((err) => console.error("Error fetchin products", err));
  };
  
//Бараа оруулах

  const addProduct = async () => {
    console.log()
    if (!productName) {
      alert("Бүтээгдэхүүний нэрийг оруулна уу!");
      return;
    }

    const newProduct = {
      name: productName,
      mainPrice: productPrice,
      saledPrice: salePrice,
      description,
      quantity,
      hidden,
      category: selectedCategory,
    };

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();

      console.log(data)

      fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editProduct = (product) => {
    setProductName(product.name);
    setSelectedCategory(product.category);
    setProductPrice(product.mainPrice);
    setSalePrice(product.saledPrice);
    setDescription(product.description);
    setQuantity(product.quantity);
    setHidden(product.hidden);
    setEditProductId(product._id);
    setIsEditing(true);
  };

  const updateProduct = async () => {
    console.log(productName)
    const updatedProduct = {
      name: productName,
      category: selectedCategory,
      mainPrice: productPrice,
      saledPrice: salePrice,
      description,
      quantity,
      hidden,
    };

    console.log(updatedProduct)

    try {
      const response = await fetch(`http://localhost:5000/api/products/${editProductId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      const data = await response.json();
      console.log(data)

      fetchProducts(); 
      resetForm();
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };  

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Хэрэглэгч устгах функц
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId)); // Устгасны дараа жагсаалтаас устгах
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
  

  const resetForm = () => {
    setProductName('');
    setSelectedCategory('');
    setProductPrice('');
    setSalePrice('');
    setDescription('');
    setQuantity('');
    setHidden(false);
    setEditProductId(null);
    setIsEditing(false);
  };


  // Logut Хийх 
  const handleLogout = () => {
    navigate('/login'); // LLogin руу 
  };

  // Лого дээр дархад home page руу
  const handleLogoClick = () => {
    navigate('/'); 
  };

  // Section titles Динамик map хийсэн
  const sectionTitles = {
    dashboard: 'Dashboard',
    products: 'Бараа',
    categories: 'Ангилал',
    applications: 'Анкет',
    users: 'Хэрэглэгчид',
    orders: 'Захиалгууд',
    reports: 'Тайлан',
    settings: 'Засвар'
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <img
            src="src/assets/Logo.jpg"
            alt="Logo"
            className="h-20 w-auto mb-9 cursor-pointer"
            onClick={handleLogoClick}
          />
          <ul className="space-y-4">
            {Object.keys(sectionTitles).map((section) => (
              <li
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center space-x-2 cursor-pointer ${activeSection === section ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
              >
                <FontAwesomeIcon
                  icon={
                    section === 'dashboard' ? faHome :
                    section === 'products' ? faBoxOpen :
                    section === 'categories' ? faTh :
                    section === 'applications' ? faFileAlt :
                    section === 'users' ? faUser :
                    section === 'orders' ? faReceipt :
                    section === 'reports' ? faChartLine :
                    faCog
                  }
                />
                <span>{sectionTitles[section]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={handleLogout} className="text-red-500 hover:text-red-700 cursor-pointer flex items-center space-x-2">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Гарах</span>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{sectionTitles[activeSection]}</h1>
          <input
            type="text"
            placeholder="Search Product"
            className="p-2 rounded-lg border focus:outline-none"
          />
        </div>

        {/* Dashboard үндсэн нүүр (dashboard идэвхтэй үед л харагдана) */}
        {activeSection === 'dashboard' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* User Count */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-green-500 text-3xl"></span>
                <h3 className="text-xl font-semibold text-gray-700">Нийт хэрэглэгчид</h3>
                <p className="text-3xl font-bold text-gray-800">{userCount}</p>
              </div>

              {/* Order Count (Placeholder) */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-red-500 text-3xl"></span>
                <h3 className="text-xl font-semibold text-gray-700">Нийт захиалга</h3>
                <p className="text-3xl font-bold text-gray-800">null</p>
              </div>

              {/* Revenue (Placeholder) */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-blue-500 text-3xl"></span>
                <h3 className="text-xl font-semibold text-gray-700">Нийт орлого</h3>
                <p className="text-3xl font-bold text-gray-800">null</p>
              </div>

              {/* New Applications (Placeholder) */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-orange-500 text-3xl"></span>
                <h3 className="text-xl font-semibold text-gray-700">Шинээр ирсэн анкет</h3>
                <p className="text-3xl font-bold text-gray-800">null</p>
              </div>
            </div>
          </div>
        )}

        {/* Бараа хэсгийг идэвхжүүлсэн тохиолдолд бараа нэмэх боломжтой */}
        {activeSection === 'products' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isEditing ? 'Бүтээгдэхүүн засах' : 'Шинэ бараа нэмэх'}
          </h2>
          <input
            type="text"
            placeholder="Барааны нэр"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-2 border rounded-lg mb-4 w-full"
          />
           <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-lg mb-4 w-full"
            >
              <option value="">Ангилал сонгох</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          <input
            type="number"
            placeholder="Үндсэн үнэ"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="p-2 border rounded-lg mb-4 w-full"
          />
          <input
            type="number"
            placeholder="Хямдарсан үнэ"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            className="p-2 border rounded-lg mb-4 w-full"
          />
          <textarea
            placeholder="Тайлбар"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded-lg mb-4 w-full"
          />
          <input
            type="number"
            placeholder="Тоо хэмжээ"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="p-2 border rounded-lg mb-4 w-full"
          />
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={hidden}
              onChange={(e) => setHidden(e.target.checked)}
              className="mr-2"
            />
            Далдлах
          </label>
          <button
            onClick={isEditing ? updateProduct : addProduct}
            className={`px-4 py-2 ${
              isEditing ? 'bg-yellow-500' : 'bg-green-500'
            } text-white rounded-lg hover:${isEditing ? 'bg-yellow-600' : 'bg-green-600'}`}
          >
            {isEditing ? 'Засах' : 'Нэмэх'}
          </button>
  
          <h3 className="text-xl font-bold mt-8 mb-4">Бүтээгдэхүүнүүд</h3>
          <ul>
            {products.map((product) => (
              <li key={product._id} className="mb-4 p-4 border rounded-lg">
                <h4 className="font-bold">{product.name}</h4>
                <p>Үндсэн үнэ: {product.mainPrice}</p>
                <p>Ангилал: {product.category}</p>
                <p>Хямдарсан үнэ: {product.saledPrice}</p>
                <p>Тайлбар: {product.description}</p>
                <p>Тоо хэмжээ: {product.quantity}</p>
                <p>Далд: {product.hidden ? 'Тийм' : 'Үгүй'}</p>
                <button
                  onClick={() => editProduct(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2"
                >
                  Засах
                </button>
                <button
                    onClick={() => deleteProduct(product._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Устгах
                  </button>
              </li>
            ))}
          </ul>
        </div>
        )}
        {activeSection === 'users' && (
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4">Хэрэглэгчдийн жагсаалт</h2>
            <ul>
            {users.map(user => (
                <li key={user._id} className="mb-4 p-4 border rounded-lg">
                  <h4 className="font-bold">{user.name}</h4>
                  <p>Утасны дугаар: {user.phone}</p>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-2"
                  >
                    Устгах
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

         {/* Categories Section */}
      {activeSection === 'categories' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ангилал нэмэх</h2>
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="p-2 border rounded-lg mb-4 w-full"
          />
          <button
            onClick={addCategory}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-4"
          >
            Нэмэх
          </button>
          <h3 className="text-xl font-bold mt-8 mb-4">Ангилалууд</h3>
          <ul>
            {categories.map((category) => (
              <li key={category._id} className="mb-4 p-4 border rounded-lg flex justify-between items-center">
                <span>{category.name}</span>
                <button
                  onClick={() => deleteCategory(category._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Dashboard;
