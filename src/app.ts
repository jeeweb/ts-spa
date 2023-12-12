import base from "./views/base";
import router from "./router";

const currentDomain = location.origin;
const app = document.querySelector("#app")!;
app.innerHTML = base;

const navigateTo = (url: string) => {
  const urlDomain = url.split("/")[0] + "//" + url.split("/")[2];
  if (urlDomain !== currentDomain) {
    location.href = url;
  }
  window.history.pushState(null, "", url);
  router();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest("a");

    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    navigateTo(target.href);
  });
  router();
});

window.addEventListener("popstate", router);
