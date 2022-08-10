
export const List = ({list}) => {

  return (
    <div>
      {list.map(l => {
        return l.name
      })} 
    </div>
  )
}