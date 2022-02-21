import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

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
                    <div class="border borde-gray-400 px-4 py-4">
                        <a href=""> <img src="/img/anh 1.jpg" width="400" alt=""></a>
                        <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                        <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
                    </div>
                    <div class="border borde-gray-400 px-4 py-4">
                        <a href=""> <img src="/img/anh 2.jpg" width="400" alt=""></a>
                        <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                        <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
                    </div>
                    <div class="border borde-gray-400 px-4 py-4">
                        <a href=""> <img src="/img/anh 3.jpg" width="400" alt=""></a>
                        <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                        <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
                    </div>
                </div>
                
            </section>
            <section class="news">
                <h2 class="text-2xl text-[#272f53] font-semibold my-4 uppercase">Hoạt động sinh viên</h2>
                <div class="grid grid-cols-3 gap-8">
                    <div class="border borde-gray-400 px-4 py-4">
                        <a href=""> <img src="/img/anh 1.jpg" width="400" alt=""></a>
                        <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                        <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
                    </div>
                    <div class="border borde-gray-400 px-4 py-4">
                        <a href=""> <img src="/img/anh 2.jpg" width="400" alt=""></a>
                        <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                        <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
                    </div>
                    <div class="border borde-gray-400 px-4 py-4">
                        <a href=""> <img src="/img/anh 3.jpg" width="400" alt=""></a>
                        <h3 class="my-4"><a href="" class="text-lg text-[#cb7801] no-underline font-semibold">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                        <p>Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh "Ong vàng Poly", tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt động</p>
                    </div>
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
