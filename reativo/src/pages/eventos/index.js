import './index.scss';


export default function Eventos() {


  function ola() {
    alert('Oláaaa!');
  }

  function alterou(ev) {
    let valor = ev.target.value;

    alert('Alterou a caixinha de texto para >> ' + valor);
  }

  function alterou2(ev) {
    let valor = ev.target.checked;

    alert('Alterou o checkbox para >> ' + valor);
  }
  

  return (
    <div className='pagina-eventos'>
      <h1> Eventos </h1>
      <hr />

      <h2> OnClick </h2>
      <button onClick={ola}> Boas Vindas </button>

      <h2> OnChange </h2>
      <input type='text' onChange={alterou} /> <br />
      <input type='checkbox' onChange={alterou2} /> Favorito


    </div>
  )
}