import Model, { Data } from "./model";
import Tech from "./views/tech";
import Design from "./views/design";
import Article from "./views/article";
import { page404 } from "./views/404";

type Route = {
  route:
    | {
        path: string;
        view: typeof Tech;
      }
    | {
        path: string;
        view: typeof Article;
      };
  result: RegExpMatchArray | null;
};

export default class Controller {
  private model: Model;

  constructor() {
    this.model = new Model();
  }

  getView(view: string) {
    let result;
    switch (view) {
      case "tech":
        result = new Tech();
        break;
      case "design":
        result = new Design();
        break;
    }
    return result;
  }

  async getArticleById(id: string) {
    await this.model.fetchData().then((data: Data[]) => {
      const articleView = new Article();
      const article = data.find((item) => item.id === id);
      if (article !== undefined) articleView.getData(article);
    });
  }
  async getAllArticles(dataType: string) {
    await this.model.fetchData().then((data: Data[]) => {
      const articles = data.filter((item: Data) => item.type === dataType);
      if (dataType === "tech" || dataType === "design")
        this.getView(dataType)!.getData(articles);
    });
  }

  render(path: Route) {
    const contents = document.querySelector("#contents")!;

    if (!path) {
      contents.innerHTML = page404;
      return;
    }
    if (path.result !== null) {
      const id = path.result[1];
      if (!id) {
        const dataType = path.route.view.name.toLowerCase();
        this.getAllArticles(dataType);
      } else {
        this.getArticleById(id);
      }
    }
  }
}
