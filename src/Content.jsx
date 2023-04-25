import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {

  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("handleArticlesIndex");
    axios.get()
  }

    return (
      <div>
        <<ArticlesIndex articles={articles} />
      </div>
    )
  }