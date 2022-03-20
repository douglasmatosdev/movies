import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import { MoviePage } from 'types/movie'
import './style.css'

type Props = {
    page: MoviePage
    onChange: Function
}

export const Pagination = ({ page, onChange }: Props) => {
    return (
        <div className="movies-pagination-container">
            <div className="movies-pagination-box">
                <button className="movies-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)}>
                    <Arrow className="movies-flip-horizontal" />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="movies-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
                    <Arrow />
                </button>
            </div>
        </div>
    )
}