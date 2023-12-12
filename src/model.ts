export interface Data {
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
  fetchData(): Promise<Data[]> {
    return fetch("/src/db.json")
      .then((res) => res.json())
      .catch((error: Error) => console.log(error))
      .finally(() => {
        this.hideLoadingSpinner();
      });
  }
  showLodingSpinner() {
    const app = document.querySelector("#app");
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "loading-spinner";
    if (app !== null) app.appendChild(loadingSpinner);
  }
  hideLoadingSpinner() {
    const app = document.querySelector("#app");
    const loadingSpinner = document.querySelector(
      ".loading-spinner"
    ) as HTMLDivElement;
    if (app !== null) app.removeChild(loadingSpinner);
  }
}
