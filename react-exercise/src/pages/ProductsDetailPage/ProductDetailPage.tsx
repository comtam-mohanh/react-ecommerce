import { Layout } from "../../layout/Layout";
import { ExtraInfo } from "./components/Extra-Info";
import { ProductDetail } from "./components/Product-Details";
import { Suggestion } from "./components/Product-Suggestion";
import "./ProductPage.css"

export function ProductDetailPage() {
    return (
        <Layout>
            <div className="product-page">
                <div className="product-picture-detail">
                    <img src="https://source.unsplash.com/random/500x400/?coffeemug" alt="coffee" className="product-img" />
                    <ProductDetail />
                </div>
                <div className="extra-info">
                    <ExtraInfo />
                </div>
                <div className="large-divider"></div>
                <div className="suggestion-list">
                    <Suggestion />
                    <Suggestion />
                </div>
            </div>
        </Layout>
    )
}