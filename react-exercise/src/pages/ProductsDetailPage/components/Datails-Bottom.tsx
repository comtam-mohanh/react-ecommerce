import "./Details-Bottom.css"

export function DetailBottom() {
    return (
        <div className="detail-bottom">
            <h5 className="color">
                Color:
                <div className="first circle"></div>
                <div className="second circle"></div>
                <div className="third circle"></div>
            </h5>
            <p>In Stock</p>
            <p>Quantity</p>
            {/* <select name="quantity" id="quantity" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> */}
            <input type="number" placeholder="1" required id="quantity" min={0} />
        </div>
    )
}