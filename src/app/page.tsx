export default function Home() {
  return (
    <main className="bg-gray-100 h-screen justify-center p-5 flex items-center">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex gap-2 md:flex-row flex-col">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 focus:outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:text-red-600 placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full md:px-10 focus:scale-90 outline-none transition font-medium">
          Search
        </button>
      </div>
    </main>
  );
}
