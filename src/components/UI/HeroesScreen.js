import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroesScreen = ({history}) => {

    //  Captura todos los Parametros de la barra de navegacion
    const params = useParams()
    const { heroeId } = params;
    const heroe = useMemo(() => getHeroesById( heroeId ) , [ heroeId ])

    if ( !heroe ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        history.replace('/')
    }

    return (

        <div className="container mt-3">

            <div className="col-4 mt-2">
            <div class="card" style={{ maxWidth : 500, maxHeight : 950 }}>
            <div class="card-body">

                <img src={`../assets/heroes/${ heroe.id }.jpg`} alt='nombre' className="card-img" />
                <h4 class="card-title"> { heroe.superhero } </h4>
                <h6 class="card-subtitle mb-2 text-muted"> { heroe.characters } </h6>
                <p class="card-text"> { heroe.first_appearance } </p>
                <p class="card-text"> { heroe.publisher } </p>
                <button className="btn btn-danger mt-2 mb-2" onClick={ handleReturn }> Regresar </button>

            </div>
            </div>
            </div>
            
        </div>

    )
}
