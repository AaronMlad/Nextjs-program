import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="text-xl bg-[#f5f2ef] flex-grow flex items-center justify-center">
        <h1>This is the Home Page</h1>
      </main>
      <Footer/>
    </div>
  );
}
