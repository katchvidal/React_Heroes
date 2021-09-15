import { heroes } from "../database/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics', 'Marvel Comics' ]

    if ( !validPublisher.includes( publisher ) ){
        throw new Error( `Publisher: ${publisher} no valido`)
    }

    return heroes.filter( hero => hero.publisher === publisher )
}