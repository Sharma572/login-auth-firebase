import axios from 'axios'
import React, { useEffect,useState } from 'react'

const ApiData = () => {
    const [data, setData] = useState([])
    // const [tableData, setTableData] = useState(d)
    useEffect(() => {
    getData()
    }, [])
    
    const getData=()=>{
        axios.get(`http://146.190.109.193:8082/gettournament`).then((res)=>{
            console.log(res.data);
            setData(res.data.Tournament);

            
        }).then((err)=>{
            console.log("err");
        })
    }
console.log(data);
  return (
    <table>
      <th>S.no</th>
      <th>reatedAt</th>
      <th>endingTime</th>
      <th>nameoftournament</th>
      <tbody>
        {data.map((ele, i) => (
          <tr>
            <td>{i}</td>
            <td>{ele.tournamentId}</td>
            <td>{ele.tournamentId}</td>
            <td>{ele.tournamentmap}</td>
            <td>
              {ele.tickets.map((data) => (
                <p>{data.userId}</p>
              ))}
            </td>
            <td>
              {ele.Rooms.map((id) => (
                <p>{id.createrId}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ApiData