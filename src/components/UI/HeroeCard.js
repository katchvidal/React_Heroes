import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ( heroe ) => {

    return (
        
        <div className="col-4 mt-2">
        <div class="card" style={{ maxWidth : 500, height : 880 }}>
        <div class="card-body">

            <img src={`./assets/heroes/${ heroe.id }.jpg`} alt='nombre' className="card-img" />
            <h4 class="card-title"> { heroe.superhero } </h4>
            <h6 class="card-subtitle mb-2 text-muted"> { heroe.characters } </h6>
            <p class="card-text"> { heroe.first_appearance } </p>
            <p class="card-text"> { heroe.publisher } </p>
            <Link to={ `./hero/${ heroe.id }` }  className="btn btn-danger mt-2 mb-2"> Ver Mas  </Link>
            

        </div>
        </div>
        </div>
            
           
    )
}
