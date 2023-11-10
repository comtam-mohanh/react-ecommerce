import "./ProductOption.css"

export function ProductOption() {
    return (
        <div className="product-option">
            <img src="https://source.unsplash.com/random/400x400/?coffeemug" alt="coffee mug" />
            <div className="details">
                <p>Product name</p>
                <p>$1.00</p>
            </div>
        </div>
    )
}