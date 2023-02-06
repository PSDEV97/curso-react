import React from 'react'
import { Link } from 'react-router-dom'
import './heroCard.css'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    //${process.env.PUBLIC_URL}
    const imgPath = `/src/assets/img/${id}.jpg`
    return (
        <Link to={`/hero/${id}`} className='my-card'>            
            <img src={ imgPath } className='img img-responsive' alt={ superhero } /> 
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
