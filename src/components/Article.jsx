import { Navigate, useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle"
import Loading from "./Loading";

export default function Article () {
    const {teamId, articleId} = useParams()

    const {
        response: article,
        loading
    } = useArticle({teamId, articleId})

    let body
    if (loading === true) {
        body = <Loading />
    } else if (article === null) {
        body = <Navigate to={`/${teamId}/articles`} />
    } else {
        body = <div className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
    </div>
    }
    
    return (
        <div className="panel">
            {body}
        </div>
    )
}