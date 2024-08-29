import './index.scss';

export default function Menu () {
    return(
        <div className='menu-box'>
            <ul>
                <li>Antipasti</li>
                <li>Primi</li>
                <li>Secondi</li>
                <li>Dolce</li>
            </ul>
            <div className="display">
                <div className="box">
                    <span className="dish-name">pesce</span>
                    <span className="dish-price">88€</span>
                    <span className="dish-ingredients">ricotta spinaci prezzemolo verdure</span>
                </div>
                <div className="box">
                    <span className="dish-name">pesce</span>
                    <span className="dish-price">88€</span>
                    <span className="dish-ingredients">ricotta spinaci prezzemolo verdure</span>
                </div>
                <div className="box">
                    <span className="dish-name">pesce</span>
                    <span className="dish-price">88€</span>
                    <span className="dish-ingredients">ricotta spinaci prezzemolo verdure</span>
                </div>
                <div className="box">
                    <span className="dish-name">pesce</span>
                    <span className="dish-price">88€</span>
                    <span className="dish-ingredients">ricotta spinaci prezzemolo verdure</span>
                </div>
                <div className="box">
                    <span className="dish-name">pesce</span>
                    <span className="dish-price">88€</span>
                    <span className="dish-ingredients">ricotta spinaci prezzemolo verdure</span>
                </div>
                <div className="box">
                    <span className="dish-name">pesce</span>
                    <span className="dish-price">88€</span>
                    <span className="dish-ingredients">ricotta spinaci prezzemolo verdure</span>
                </div>
            </div>
        </div>
    )
}