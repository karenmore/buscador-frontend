import React, { useState, useEffect } from 'react';
import ListProducts from '../components/Product/ListProducts';
import FilterName from '../components/Product/FilterName';
import FilterCategory from '../components/Product/FilterCategory';
import clientAxios from '../config/axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [itemSearch, setTtemSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = '/products';
        const response = await clientAxios.get(url);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleNameFilter = (searchTerm) => {

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    
    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (categorId) => {
    setSelectedCategory(categorId);
    if (categorId === 'todas las categorias') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.categorId.categorId  === categorId
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <div className='grid grid-cols-1'>
        <FilterCategory
          selectedCategory={selectedCategory}
          handleCategoryFilter={handleCategoryFilter}
        />
      </div>
      <FilterName setNameInput={handleNameFilter} />
      <ListProducts products={filteredProducts} />
    </>
  );
};

export default Product;