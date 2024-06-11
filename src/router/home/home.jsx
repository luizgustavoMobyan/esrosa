/* eslint-disable no-unused-vars */
import React from 'react';
import { Categories } from "../../components/categories/categories"

const categories = [
  {
    "id": 1,
    "title": "Bolo de Chocolate com Morango",
    "price": "R$ 20,00",
    "stock": "10",
    "imageUrl": "https://www.estadao.com.br/resizer/oFDrDp3xgfze9zuyNaR5gnyURVA=/arc-anglerfish-arc2-prod-estadao/public/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg"
  },
  {
    "id": 2,
    "title": "Copo da Felicidade",
    "price": "R$ 15,00",
    "stock": "10",
    "imageUrl": "https://cdn-productdbimages.barry-callebaut.com/sites/bc_productdb_images/files/styles/mdp_web_gm_chocac-detail/public/externals/a17abc78179fffd5f128ef02131fe9bc.jpg?itok=0gAe3gWc"
  },
  {
    "id": 3,
    "title": "Doces para Festa",
    "price": "R$ 1,00",
    "stock": "10",
    "imageUrl": "https://saborecia.com.br/wp-content/uploads/2020/08/MG_4421-scaled.jpg"
  },
  {
    "id": 4,
    "title": "Coxinha",
    "price": "R$ 10,00",
    "stock": "10",
    "imageUrl": "https://acdn.mitiendanube.com/stores/002/961/025/products/facetune_05-07-2023-10-57-3911-d49b959788d4f189d616885655215834-1024-1024.jpeg"
  },
  {
    "id": 5,
    "title": "Empada de Camarão",
    "price": "R$ 10,00",
    "stock": "10",
    "imageUrl": "https://www.sabornamesa.com.br/media/k2/items/cache/24c01e452493eba0f9e741ef09a2d61a_XL.jpg"
  },
  {
    "id": 6,
    "title": "Monte seu Kit Festa",
    "price": "R$ 100,00",
    "stock": "10",
    "imageUrl": "https://padariavianney.com.br/web/image/product.template/5142/image_1024?unique=0b96313"
  }
]

export function Home() {
  // Função para buscar a imagem com base no ID do item
  const getImageUrlById = (id) => {
    const category = categories.find(item => item.id === id);
    return category ? category.imageUrl : null;
  };

  return (
    <div>
      <Categories categories={categories} getImageUrlById={getImageUrlById} />
    </div>
  )
}