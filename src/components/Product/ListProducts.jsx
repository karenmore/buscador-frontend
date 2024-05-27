import React from 'react';

const ListProducts = ({ products }) => {

  
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl font-bold mb-10 text-center">Buscador de Medicamentos</h2>

      {products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-5">{product.description}</p>
              <p className="text-gray-700 mb-5">{product.categorId.name}</p>
              <p className="text-gray-600 font-bold">Principios activos:</p>
              <ul className="list-disc pl-4">
                {product.activeIngredient.split(", ").map((componentes) => (
                  <li key={componentes}>{componentes}</li>
                ))}
              </ul>
              <p className="text-gray-600">Imagen: {product.imageUrl}</p>
            </div>
          ))}
        </div>
      )}
      {products.length === 0 && <p>No se encontraron productos.</p>}
    </div>
  );
};

export default ListProducts;