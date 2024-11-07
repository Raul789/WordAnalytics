import { useState } from "react";

import Stats from "./components/Stats";
import Textarea from "./components/Textarea";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />

      <Main>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Main>

      <Footer />
    </>
  );
}

export default App;