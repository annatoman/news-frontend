export function ArticlesIndex(props) {
    return (
      <div>
        <h1>All Articles</h1>
        {props.articles.map((article) => (
            <div key={article.title}>
                <h1>{article.author}</h1>
                <h1>{article.description}</h1>
                <h1>{article.content}</h1>                
            </div>
        ))}
      </div>
    );
  }

