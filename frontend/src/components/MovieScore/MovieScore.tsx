import { MovieStars } from "components/MovieStars"
import './style.css'

type Props = {
    score: number
    count: number
}

export const MovieScore = ({ score, count }: Props) => {
    return (
        <div className="movies-score-container">
            <p className="movies-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="movies-score-count">{count} avaliações</p>
        </div>
    )
}