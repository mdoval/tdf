import SearchAtmInput from "../ui/dashboard/search-input";
import TableAtmQuery from "../ui/dashboard/table";

export default async function DashboardPage({ searchParams}: {searchParams?: {query?: string;page?: string;};}) {
  const query = searchParams?.query || '';

  return (
    <div className="border shadow-lg p-4 bg-white space-y-4">
      <div>
        <SearchAtmInput />
      </div>
      <hr />
      <div>
        <TableAtmQuery query={query} />
      </div>
    </div>
  );
}
