import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
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
            ${
              entry.getIn(["data", "tags"], []).map(
              tag =>
                html`
                  <a href="#" rel="tag">${tag}</a>
                `
              )
            }
          </div>
        


          <p>${entry.getIn(["data", "summary"], "")}</p>

          ${this.props.widgetFor("body")}
      </article>

    `;
  }
});

export default Post;
