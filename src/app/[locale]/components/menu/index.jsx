import { useState, useEffect } from 'react';
import menuData from '../../../../static/menu';
import { useLocale }                         from "next-intl";
import './index.scss';


export default function Menu() {

  const [selectedCategory, setSelectedCategory] = useState('Antipasti');
  const locale = useLocale();
  const [menuDataState, setMenuDataState] = useState(null);


  useEffect(() => {
    switch (locale) {
      case 'it':
        setMenuDataState(menuData.menuDatait);
        break;
      case 'es':
        setMenuDataState(menuData.menuDataes);
        break;
      case 'en':
      default:
        setMenuDataState(menuData.menuDataen);
        break;
    }
  },[])

  return (
    <div className='menu-box'>
      <ul>
        {Object.keys(menuDataState).map((category) => (
          <li key={category} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? 'selected-category' : ''}>
            {category}
          </li>
        ))}
      </ul>
      <div className="display">
        {menuDataState[selectedCategory].map((dish, index) => (
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
