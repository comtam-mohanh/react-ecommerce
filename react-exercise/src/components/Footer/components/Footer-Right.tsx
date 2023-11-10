import "./Footer-Right.css"

export function FooterRight() {
    return (
        <div className="footer-right">
            <div className="link-right">
                <h5>Keep in touch</h5>
                <p className="link">Subscribe to our newsletter and get 10% off your first order</p>
                <input type="email" placeholder="Email" />
            </div>
        </div>
    )
}