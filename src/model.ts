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

export default class Model {
  constructor() {
    this.showLodingSpinner();
    this.fetchData();
  }
  async fetchData(): Promise<articleInfo[]> {
    return await fetch("/public/db.json")
      .then((res) => res.json())
      .catch((error: Error) => console.log(error))
      .finally(() => {
        this.hideLoadingSpinner();
      });
  }
  showLodingSpinner() {
    const app = document.querySelector("#app")!;
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "loading-spinner";
    app.appendChild(loadingSpinner);
  }
  hideLoadingSpinner() {
    const app = document.querySelector("#app")!;
    const loadingSpinner = document.querySelector(
      ".loading-spinner"
    ) as HTMLDivElement;
    if (loadingSpinner) app.removeChild(loadingSpinner);
  }
}
