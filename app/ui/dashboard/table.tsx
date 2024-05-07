import { obtenerDatos } from "@/lib/actions";

interface TableProps {
  query: string;
}

export default async function TableAtmQuery({ query }: TableProps) {
  const datos: IAtm[] | undefined = await obtenerDatos(query)

  return (
    <div className="table-wrp block max-h-96 overflow-auto">
      <table className="w-full table">
        {/* head */}
        <thead className="bg-white border-b sticky top-0">
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
        <tbody className="h-96 overflow-y-auto">
          {datos?.map((dato) => {
            return (
              <tr key={dato.ATM} className="hover h-2">
                <td>{dato.Sucursal.toString()}</td>
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
