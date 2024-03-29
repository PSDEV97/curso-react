import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {

  const { id: idHero } = useParams()
  const hero = getHeroById( idHero )
  const navigate = useNavigate()

  if(!hero){
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  const imgPath = `/src/assets/img/${ idHero }.jpg`

  const handleReturn = () => {
    navigate(-1)
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={ imgPath } 
          alt={ superhero }
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3> { superhero } </h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> { alter_ego } </li>
          <li className='list-group-item'> <b>Publisher:</b> { publisher } </li>
          <li className='list-group-item'> <b>First Appearance:</b> { first_appearance } </li>
          
          <h5 className='mt-3'>Characters</h5>
          <p>{ characters }</p>

          <button 
            className='btn btn-outline-primary'
            onClick={ handleReturn }
          >
            Return
          </button>
        </ul>
      </div>
    </div>
  )
}
