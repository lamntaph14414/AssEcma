const Nav = {
    render() {
        return /* html */`
            <nav>
                <ul class="menu">
                    <li class=menu-item><a href="/" class=menu-item_link>Trang chủ</li>
                    <li class=menu-item><a href="/gioithieu" class=menu-item_link>Tin tức</li>
                    <li class=menu-item><a href="/product" class=menu-item_link>Sản phẩm</li>
                    <li class=menu-item><a href="/contact" class=menu-item_link>Liên hệ</li>
                    <li class=menu-item><a href="/admin/dashboard" class=menu-item_link>Admin</li>
                </ul>
                <div class="input">
                    <input class="w-60" type="text" >
                    <button class="border border-sky-500 bg-blue-900 text-white "><a class="" href="">Tìm kiếm</a></button>
                </div>
            </nav>`;
    },
};
export default Nav;
