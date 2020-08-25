import Docs from "/admin/preview-templates/docs.js";
import Posts from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("docs", Docs);
CMS.registerPreviewTemplate("posts", Posts);

CMS.registerPreviewStyle("/_includes/assets/css/inline.css");
CMS.registerPreviewStyle("/_includes/assets/css/main.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
