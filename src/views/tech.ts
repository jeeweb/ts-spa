import { Data, AbstractView } from "./AbstractView";

export default class Tech extends AbstractView {
  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스 테크");
  }
  getTemplate() {
    return `
    <div class="section__inner">
      <h2>개발</h2>
      <ul class="articles__list"></ul>
    </div>
    `;
  }
  getData(data: Data[]) {
    const list = this.$newEl.querySelector("ul")!;

    list.innerHTML = `${data
      .map(
        (item) => `
      <li class="article__item">
        <a href="/article/${item["id"]}" class="article__link">
          <div class="article__thumb"><img src="${item["img"]}" alt="" /></div>
          <div class="article__text">
            <span class="article__title">${item["title"]}</span>
            <p class="article__summary">${item["desc"]}</p>
            <span class="article__date">${new Date(
              item["date"]
            ).toLocaleDateString()}</span>
          </div>
        </a>
      </li>
    `
      )
      .join("")}`;
    return list;
  }
}
