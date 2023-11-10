import { Button } from "./Button/Button";
import "./Form.css"

export function Form() {
    return (
        <div className="form">
            <div className="form-header">
                <h3>Create new account</h3>
            </div>
            <div className="details-input">
                <input type="text" className="email" name="email" placeholder="Email" required />
                <input type="text" className="password" name="password" placeholder="Password" required />
            </div>
            <div className="create-acc-login">
                <Button>Create account</Button>
                <p>Already have an account? <a href="">Log in</a></p>
            </div>

            <div className="form-footer">
                <div className="divider"></div>
                <p>By signing up you agree to the <a href="">Terms of Use</a> and <a href="">Privacy Policy</a></p>
            </div>
        </div>
    )
}