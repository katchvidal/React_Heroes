import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../UI/HeroeCard';
import queryString from 'query-string'
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ( { history }) => {

    //  Obtener y Limpiar
    const location = useLocation()
    const { q = '' } = queryString.parse( location.search )
    
    const initialForm = ({
        search : q
    })
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
    const { search } = formValues

    const herofiltrado = useMemo(() => getHeroByName( q ), [q])
    //const herofiltrado = getHeroByName( q )

    const handleSubmit = ( e ) => {
        e.preventDefault()
        history.push(`?q=${search}`)
    }
    

    return (
        <div className="container">
                <form className="d-flex" onSubmit={ handleSubmit }>

                <input className="form-control me-sm-2" 
                type="text" 
                placeholder="Search" 
                autoComplete='off'
                name="search"
                value={ search }
                onChange={ handleInputChange}
                />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>

                </form>


        <div className="row">
        

                {
                    herofiltrado.map( hero => (
                        <HeroeCard key={hero.id} {...hero} />
                    ))
                }


        </div>

        </div>
    )
}
