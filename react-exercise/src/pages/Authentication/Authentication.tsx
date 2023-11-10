import { Header } from "../../components/Header/Header";
import { Layout } from "../../layout/Layout";
import "./Authentication.css"
import { Form } from "./components/Form";

export function Authentication() {
    return (
        <Layout>
            <div className="container">
                <div className="card">
                    <div className="form"><Form /></div>
                    <div className="img">
                        <img src="https://source.unsplash.com/random/?coffee" className="image" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}