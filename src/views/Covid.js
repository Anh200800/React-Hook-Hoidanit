import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [isloading, setisLoading] = useState(true)
    const [isError, setisError] = useState(false);

    useEffect( () => {
        try {
            async function fetchData() {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                        return item;
                    })
                }
                setDataCovid(data);
                setisLoading(false);
                setisError(false)
            }
            fetchData();
        }
        
            catch (e) {
                setisError(true)
                setisLoading(false)
    }
}, []);
    return (
      <>
        <h3>Covid 19 tracking in vietnam:</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Deaths</th>
              <th>Recovered</th>
            </tr>
          </thead>
          <tbody>
            {isError === false &&
              isloading === false &&
              dataCovid &&
              dataCovid.length > 0 &&
              dataCovid.map((item) => {
                return (
                  <tr key={item.ID}>
                    <td>{item.Date}</td>
                    <td>{item.Confirmed}</td>
                    <td>{item.Active}</td>
                    <td>{item.Deaths}</td>
                    <td>{item.Recovered}</td>
                  </tr>
                );
              })}
            {isloading === true && <tr>Loading...</tr>}
            {isError === true && <tr>Something wrong</tr>}
          </tbody>
        </table>
      </>
    );
}
export default Covid;