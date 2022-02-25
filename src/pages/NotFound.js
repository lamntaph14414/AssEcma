import Banner from "../components/Banner";
import Header from "../components/Header";
import Nav from "../components/Nav";

const NotFoundPage = {
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
            <main>
                Not Found Page
            </main>
        </div>
        `;
    },
};
export default NotFoundPage;
