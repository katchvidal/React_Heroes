import { heroes } from "../database/heroes";

export const getHeroesById = ( id ) => {

    return heroes.find( hero => hero.id === id )
    
}