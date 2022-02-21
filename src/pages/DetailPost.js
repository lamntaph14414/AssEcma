import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const DetailPost = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${Header.render()}
                ${Nav.render()}
            </header>
            <main>
                <h1>Tiêu đề<h2>
                <img src="" />
                <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default DetailPost;
