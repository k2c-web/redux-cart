//import Select from '../Select'

export default function Header({ toggleCart }) {
  return (
    <header>
      <h1>Redux Boutique</h1>
      <button onClick={toggleCart}>Show cart</button>
    </header>
  )
}
