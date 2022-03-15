import "../styles/sidebar.scss"
import { GenreResponseProps, MovieProps } from "../App"
import { Button } from "./Button"

interface SiderBarProps {
    genres: GenreResponseProps[]
    selectedGenreId: number
    setSelectedGenreId: Function
}

export function SideBar(props: SiderBarProps) {
    function handleClickButton(id: number) {
        props.setSelectedGenreId(id)
    }

    return (
        <nav className="sidebar">
            <span>
                Watch<p>Me</p>
            </span>

            <div className="buttons-container">
                {props.genres.map((genre) => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={props.selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    )
}
