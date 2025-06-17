import Header from "components/Header";
import Footer from "components/Footer";
import Details from "components/Details";
import Main from "components/Main";
import Content from "components/Content";

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        <Header />
        <main>
          <Main />
          <Content />
          <Details />
        </main>
        <Footer />
      </div>
    </>
  );
}
