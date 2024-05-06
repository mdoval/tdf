import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <div className="w-1/3 m-auto p-40 space-y-4 flex flex-col justify-center text-center border shadow-xl">
          <h1 className="text-5xl">TDF</h1>
          <Link href={"/dashboard"} className="btn bg-blue-600 text-white">
            Ingresar
          </Link>
        </div>
      </div>
    </main>
  );
}
