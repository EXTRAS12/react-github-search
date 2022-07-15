import React from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

const RepoCard = ({repo}: {repo: IRepo}) => {

  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFav, setIsFav] = React.useState(favourites.includes(repo.html_url))

  const addTofavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    addFavourite(repo.html_url)
    setIsFav(true)
  }
  const removeToFavourite = (
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      removeFavourite(repo.html_url)
      setIsFav(false)
    }
  )

  return (

    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
       <a href={repo.html_url} target="_blank">
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
            Forks: <span className='font-bold mr-2'>{repo.forks}</span>
            Watchers: <span className='font-bold'>{repo.watchers}</span>

        </p>
        <p className='text-sm font-thin'>{repo?.description}</p>

        {!isFav && <button className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all'
        onClick={addTofavourite}>Добавить</button>}

        {isFav && <button className='py-2 px-4 ml-2 bg-red-400 rounded hover:shadow-md transition-all'
        onClick={removeToFavourite}>Удалить</button>}
        </a>


    </div>

  )
}

export default RepoCard
