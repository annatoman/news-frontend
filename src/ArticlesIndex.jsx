export function ArticlesIndex(props) {
    return (
      <div>
        <h1>All Articles</h1>
        {props.articles.map((article) => (
            <div key={article.title}>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <p>{article.content}</p>                
            </div>
        ))};
      </div>
    );
  }

