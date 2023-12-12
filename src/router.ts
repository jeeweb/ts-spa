import Controller from "./controller.js";
import Tech from "./views/tech.js";
import Article from "./views/article.js";
import Design from "./views/design.js";

const routes = [
  { path: "/", view: Tech },
  { path: "/design", view: Design },
  { path: "/article/:id", view: Article },
];

const pathToRegex = (path: string) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = () => {
  const { pathname } = window.location;
  const pathMatch = routes.map((route) => {
    return {
      route: route,
      result: pathname.match(pathToRegex(route.path))!,
    };
  });
  const match = pathMatch.find((el) => el.result !== null);
  const controller = new Controller();
  if (match !== undefined) {
    controller.render(match);
    if (match.result[1] !== undefined) window.scrollTo(0, 0);
  }
};

export default router;
