import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-14 items-center font-poppins font-bold h-screen w-screen justify-center bg-slate-100">
      <Header />
      <p className="text-2xl font-bold">
        Welcome to Dedsec Chat !<span className="animate-spin">👋</span>
      </p>
    </div>
  );
}

export default App;
