import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Doc = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <article class="container article-section">
          <h1 class="post--title">${entry.getIn(["data", "title"], null)}</h1>
          <div class="post--meta flex flex--column flex--center-all">
            <div>
                <time
                  >${
                    format(
                      entry.getIn(["data", "date"], new Date()),
                      "dd MMM, yyyy"
                    )
                  }</time
                >
            </div>
            <div>
              ${" by Author"}
            </div>
            <div>
              ${
                entry.getIn(["data", "tags"], []).map(
                  tag =>
                    html`
                      <a href="#" rel="tag">${tag}</a>
                    `
                )
              }
            </div>
          </div>

          <p>${entry.getIn(["data", "summary"], "")}</p>

          ${this.props.widgetFor("body")}
          
        </article>
      </main>
    `;
  }
});

export default Doc;