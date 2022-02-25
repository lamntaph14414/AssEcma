import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewPage from "./pages/admin/news";
import DetailPost from "./pages/DetailPost";
import NewPage from "./pages/tintuc";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import DetailProduct from "./pages/DetailProduct";
import NotFoundPage from "./pages/NotFound";
import AdminAddNews from "./pages/admin/news/add";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/tintuc": () => print(NewPage),
    "/tintuc/:id": ({ data: { id } }) => print(DetailPost, id),
    "/product": () => print(ProductPage),
    "/product/:id": ({ data: { id } }) => print(DetailProduct, id),

    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewPage),
    "/admin/news/add": () => print(AdminAddNews),
    "/admin/product": () => print(Dashboard),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),

});
router.notFound(() => print(NotFoundPage));
router.resolve();
