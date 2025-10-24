
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [{
    id: '43532543',
    name: 'kayone',
    idade: 22,
    email: 'kayone@gmail.com'
  },
  {
    id: '4523556',
    name: 'sabryne',
    idade: 27,
    email: 'sabryne@gmail.com'
  },
  {
    id: '4236654',
    name: 'maria',
    idade: 50,
    email: 'maria@gmail.com',
  },
  ]

  return (
    <div className='container'>
      <form>

        <h1>Cadastro de usuários</h1>
        <input name="nome" type="text" placeholder='Nome' />
        <input name="idade" type="number" placeholder='Idade' />
        <input name="email" type="email" placeholder='E-mail' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome:<span>{user.name}</span></p>
            <p>Idade:<span>{user.idade}</span></p>
            <p>Email:<span>{user.email}</span></p>
            <button className='botao'>
              <img src={Trash} />
            </button>
          </div>
        </div>

      ))}

    </div>


  )
}

export default Home
