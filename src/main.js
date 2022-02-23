import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewPage from "./pages/admin/news";
import DetailPost from "./pages/DetailPost";
import NewPage from "./pages/tintuc";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import NotFoundPage from "./pages/NotFound";
import AdminAddNews from "./pages/admin/news/add";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => print(HomePage),
    "/tintuc": () => print(NewPage),
    "/tintuc/:id": ({ data: { id } }) => print(DetailPost, id),
    "/product": () => print(ProductPage),

    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewPage),
    "/admin/news/add": () => print(AdminAddNews),
    "/admin/product": () => print(Dashboard),

});
router.notFound(() => print(NotFoundPage));
router.resolve();
