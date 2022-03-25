import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Loading from "./Loading";
import Sidebar from "./Sidebar";


export default function Articles () {
    const { teamId } = useParams()
    const {
        response: articles,
        loading
    } = useTeamsArticles(teamId)

    if (loading === true) {
        return <Loading />
    }
    
    return (
        <div className="container two-column">
            <Sidebar title="Articles" list={articles.map((article) => article.title)} />
            <Outlet />
        </div>
    )
}