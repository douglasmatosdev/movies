import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'
import { BASE_URL } from 'utils/requests'
import './style.css'

type Props = {
    movieId: string
}

export const FormCard = ({ movieId }: Props) => {

    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data)
            })
    }, [movieId])

    return (
        <div className="movies-form-container">
            <img className="movies-movies-card-image" src={movie?.image} alt={movie?.title} />
            <div className="movies-card-bottom-container">
                <h3>"{movie?.title}</h3>
                <form className="movies-form">
                    <div className="form-group movies-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group movies-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movies-form-btn-container">
                        <button type="submit" className="btn btn-primary movies-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary movies-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}