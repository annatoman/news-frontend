import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {

  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("handleArticlesIndex");
    axios
      .get("http://localhost:3000/articles.json")
      .then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };

    useEffect(handleArticlesIndex, []);

    return (
      <div>
        <ArticlesIndex articles={articles}/>
      </div>
    )
  }