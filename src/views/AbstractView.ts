export interface articleInfo {
  type: string;
  id: string;
  author: string;
  img: string;
  title: string;
  desc: string;
  date: number;
  content: string;
}

export abstract class AbstractView {
  protected $newEl!: HTMLElement;
  constructor() {
    const target = document.querySelector("#contents");
    if (target !== null) {
      this.$newEl = target.cloneNode(true) as HTMLElement;
      this.$newEl.innerHTML = this.getTemplate();
      target.replaceWith(this.$newEl);
    }
  }

  setTitle(title: string) {
    document.title = title;
  }
  abstract getTemplate(): string;
  abstract getData(
    data: articleInfo | articleInfo[]
  ): Element | HTMLUListElement;
}
