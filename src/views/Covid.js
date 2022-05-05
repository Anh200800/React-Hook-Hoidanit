
import useFetch from "../customize/fetch";
const Covid = () => {
  

 const {data:dataCovid, isloading, isError} = useFetch(  'https://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'
)
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