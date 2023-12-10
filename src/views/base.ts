import { header } from "./header";
import { footer } from "./footer";

const base = `
  ${header}
  <div class="container">
    <section id="contents" class="section"></section>
    ${footer}
  </div>
`;

export default base;
