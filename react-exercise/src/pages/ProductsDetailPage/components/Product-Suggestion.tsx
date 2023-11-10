import "./Product-Suggestion.css"
import Mug from './mug.jpg';

export function Suggestion() {
    return (
        <div className="suggestion">
            <img src={Mug} alt="coffee picture" />
            <div className="img-text">
                <p>The Brixton</p>
                <p>The perk-friendly stackable cup that brings the cafe to any terrain.</p>
                <input className="pic-btn" type="button" value="Add to cart" />
            </div>
        </div>
    )
}