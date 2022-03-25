import { useParams, Link, Navigate } from "react-router-dom";
import usePlayer from "../hooks/usePlayer"
import Loading from "./Loading";

export default function Player () {
    const { playerId } = useParams()

    const {
        response: player,
        loading
    } = usePlayer(playerId)

    let body;
    
    if (loading) {
        body = <Loading />
    } else if (player === null) {
        body = <Navigate to="/players" />
    } else {
        body = (
            <>
                <img src={player.avatar} alt={`Avatar for ${player.avatar}`} />
                <h1 className="medium-header">{player.name}</h1>
                <h3>#{player.number}</h3>
                <div className="row">
                    <ul className="info-list" style={{marginRight: 80}}>
                        <li>
                            Team
                            <div>
                                <Link to={`/${player.teamId}`}>
                                    {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
                                </Link>
                            </div>
                        </li>
                        <li>Position {player.position}</li>
                        <li>PPG {player.ppg}</li>
                    </ul>
                    <ul className="info-list">
                    <li>APG<div>{player.apg}</div></li>  
                    <li>SPG<div>{player.spg}</div></li>  
                    <li>RPG<div>{player.rpg}</div></li>  
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div className="panel">
            {body}
        </div>
    )
}