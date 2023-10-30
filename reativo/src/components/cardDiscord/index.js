import './index.scss';


export default function CardDiscord(props) {

  return (
    <div className='comp-card-discord'>
      <h1> {props.titulo} </h1>
      <img src={props.imagem} />
    </div>
  )
}