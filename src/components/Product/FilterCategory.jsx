import React, { useState, useEffect } from 'react';
import clientAxios from '../../config/axios';

const FilterCategory = ({ selectedCategory, handleCategoryFilter }) => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const url = '/caterory';
          const response = await clientAxios.get(url);
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);
  
    return (
        <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-2 mb-2">
        <div
          className={`cursor-pointer px-7 py-2 rounded-md ${
            selectedCategory === 'todas las categorias'
              ? 'bg-cyan-500 text-white font-bold'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => handleCategoryFilter('todas las categorias')}
        >
          Todas las categorías
        </div>
        {categories.map((category) => (
          <div
            key={category._id}
            className={`cursor-pointer px-7 py-2 rounded-md borde-2 ${
              selectedCategory === category.categorId
                ? 'bg-cyan-500 text-white font-bold'
                : `bg-${category.color}-200 hover:bg-${category.color}-300`
            }`}
            onClick={() => handleCategoryFilter(category.categorId)}
          >
            {category.name}
          </div>
        ))}
      </div>
    );
  };
  
export default FilterCategory;
  