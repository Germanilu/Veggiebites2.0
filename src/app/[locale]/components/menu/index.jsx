import { useState } from 'react';
import menuData from '../../../../static/menu'
import './index.scss';

export default function Menu() {

  const [selectedCategory, setSelectedCategory] = useState('Antipasti');

  return (
    <div className='menu-box'>
      <ul>
        {Object.keys(menuData).map((category) => (
          <li key={category} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? 'selected-category' : ''}>
            {category}
          </li>
        ))}
      </ul>
      <div className="display">
        {menuData[selectedCategory].map((dish, index) => (
          <div className="box" key={index}>
            <span className="dish-name">{dish.name}</span>
            <span className="dish-price">{dish.price}</span>
            <span className="dish-ingredients">{dish.ingredients}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
