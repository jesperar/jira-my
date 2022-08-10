import { useEffect, useState } from 'react'
import {List} from './list'
import {SearchPanel} from './search-panel'

export const ProjectListScreen = () => {
  const [list, setList] = useState(null)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    window.fetch('http://localhost:3001/users').then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
      setList(json)
    })
  }, [])

  return (
    <div>
      <SearchPanel />
      <List list={list || []} />
    </div>
  )
}