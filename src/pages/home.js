import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import news from "./data";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${Header.render()}
                ${Nav.render()}
            </header>
            <section>
                ${Banner.render()}
            </section>
            <section class="news">
                <h2 class="text-2xl text-[#272f53] font-semibold my-4 uppercase">Tin Tức Học Tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${news.map((post) => `
                        <div class="border borde-gray-400 px-4 py-4">
                            <a href="/tintuc/${post.id}"> <img src="${post.img}"></a>
                            <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
                
            </section>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default HomePage;
