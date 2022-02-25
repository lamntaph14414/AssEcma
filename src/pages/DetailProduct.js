import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

import Pro from "./data";

const DetailProduct = {
    async render(id) {
        const CurrentProduct = Pro.find((post) => post.id === id);
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${Header.render()}
                ${Nav.render()}
            </header>
            <main>
                <h1>${CurrentProduct.title}<h2>
                <img src="${CurrentProduct.img}" />
                <p>${CurrentProduct.desc}</p>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default DetailProduct;
