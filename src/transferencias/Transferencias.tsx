import { useEffect, useState } from 'react';
import './styles.css'
import axios, { AxiosResponse } from 'axios';

    
interface Dados {
  dataTransferencia: string;
  valor: number;
  tipo: String;
  nomeOperadorTransacao: String;
  contaId: number;
  id: number;
}

const Transferencia = () => {

const [data, setData] = useState<Dados[]>([]);

  useEffect(() => {
    axios.get<Dados[]>('http://localhost:8080/api/transferencias')
      .then((response: AxiosResponse<Dados[]>) => { // Especificando o tipo da resposta do Axios
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao fazer a requisição:', error);
      });
  }, []);

//http://localhost:8080/api/transferenciasfiltro?dataI={dataInicial}&dataF={dataFinal}&operador={Beltrano}

//http://localhost:8080/api/transferencias


    return (
    <>
    <div>
            <form className="header">
                <p>Data de inicio</p>
                <input type="date"></input>
                <p>Data de fim</p>
                <input type="date"></input>
                <p>Nome operador</p>
                <input type="text"></input>
                <button>Pesquisar</button>
            </form>
         </div>  

<div>
 <table>
        <thead>
          <tr>
            <th>dados</th>
            <th>valencia</th>
            <th>tipo</th>
            <th>Nome do operador transacinado</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.dataTransferencia}</td>
              <td>{item.valor}</td>
              <td>{item.tipo}</td>
              <td>{item.nomeOperadorTransacao}</td>
            </tr>
          ))}
        </tbody>
      </table>

  </div> 

</>
        
       )
}

export default Transferencia;