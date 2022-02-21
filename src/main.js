import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewPage from "./pages/admin/news";
import DetailPost from "./pages/DetailPost";
import NewPage from "./pages/gioithieu";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};
router.on({
    "/": () => print(HomePage),
    "/gioithieu": () => print(NewPage),
    "/gioithieu/:id": () => print(DetailPost),
    "/product": () => print(ProductPage),

    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewPage),
    "/admin/product": () => print(Dashboard),

});
router.resolve();
