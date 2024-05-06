import { obtenerDatos } from "@/lib/actions";

interface TableProps {
  query: string;
}

export default async function TableAtmQuery({ query }: TableProps) {
  const datos: IAtm[] | undefined = await obtenerDatos(query)

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th>SUCURSAL</th>
            <th>ATM</th>
            <th>REM 1</th>
            <th>REM 2</th>
            <th>REM 3</th>
            <th>REM 4</th>
            <th>REMANENTE</th>
          </tr>
        </thead>
        <tbody>
          {datos?.map((dato) => {
            return (
              <tr key={dato.ATM}>
                <td>{dato.Sucursal}</td>
                <td>{dato.ATM}</td>
                <td>{dato.REM1}</td>
                <td>{dato.REM2}</td>
                <td>{dato.REM3}</td>
                <td>{dato.REM4}</td>
                <td>{dato.REMANENTE}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
