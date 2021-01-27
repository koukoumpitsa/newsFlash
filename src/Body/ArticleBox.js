import React from "react";

export default function ArticleBox() {
  return (
    <div className="articleBox">
      <div className="articleBox_keyword">
        <p className="keyword_text">Keyword</p>
      </div>
      <div className="articleBox_titles">
        <p className="titles_main">Title of Article</p>
        <p className="titles_abstract">Abstract</p>
      </div>
      <div className="articleBox_readMore">
        <a href="#" className="readMore_link">
          Read more
        </a>
      </div>
    </div>
  );
}
