import { React, useState, useEffect, useCallback } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll
    from "react-infinite-scroll-component";
    
const REACT_API_KEY = process.env.REACT_API_KEY;

function News(props) {
    let category = props.category;
    console.log(category);
    
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);

    const fetchData = async () => {
        const url =
`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page
            }&apiKey=${REACT_API_KEY}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }


    useEffect(() => {
        fetchData();
    }, [])
    

    return (
        <InfiniteScroll
            //This is important field to render the next data
            dataLength={articles.length}
            next={fetchData}
            hasMore={
                articles.length < totalResults
            }
            loader={
                <h4 className="text-center">
                    Loading...
                </h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="container my-3">
                <div className="row">
                    {articles.length&& articles.map((element) => {
                        console.log({ element });
                        
                        return (
                            <div className="col-md-4" key={element?.url}>
                                <NewsItem
                                    sourceName={element?.source.name}
                                    title={element?.title}
                                    desc={element?.description}
                                    imageURL=
                                    {element?.urlToImage ?
                                        element?.urlToImage :
                                        ''}
                                    newsUrl={element?.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </InfiniteScroll>
    );
}

export default News;