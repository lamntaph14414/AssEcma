import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

import Posts from "./data";

const DetailPost = {
    render() {
        const post = Posts.find((post) => post.id === "3");
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${Header.render()}
                ${Nav.render()}
            </header>
            <main>
                <h1>${post.title}<h2>
                <img src="${post.img}" />
                <p>${post.desc}</p>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default DetailPost;
