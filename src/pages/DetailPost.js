import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

import Posts from "./data";

const DetailPost = {
    async render(id) {
        const CurrentPost = Posts.find((post) => post.id === id);
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${Header.render()}
                ${Nav.render()}
            </header>
            <main>
                <h1>${CurrentPost.title}<h2>
                <img src="${CurrentPost.img}" />
                <p>${CurrentPost.desc}</p>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default DetailPost;
