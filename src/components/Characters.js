
export default function Characters(props) {

    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null)
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="Alive"></span>
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"></span>
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p className="text-grey">Episodios: </p>
                            <span>{character.episode.length}</span>

                            <p className="text-grey">Especie: </p>
                            <span>{character.especies}</span>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        </div>
    )
}
