export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string
}

interface SearchPanelProps {
  users: User[],
  param: {
    name: string;
    personId: string;
  },
  setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input type="text"
               value={param.name}
               onChange={(evt) =>
                 setParam({
                   ...param,
                   name: evt.target.value,
                 })
               }
        />
        <select name="" id=""
                value={param.personId}
                onChange={(evt) =>
                  setParam({
                    ...param,
                    personId: evt.target.value,
                  })
                }
        >
          <option value=''>all</option>
          {users.map(user =>
            <option key={user.name} value={user.id}>{user.name}</option>)}
        </select>
      </div>
    </form>
  )
}
