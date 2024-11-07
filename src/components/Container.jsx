import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib.js/constants";
import Stats from "./components/Stats";
import Textarea from "./components/Textarea";
import {useState} from "./useState";


export default function Container() {
  const [text,  setText] = useState("");
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters : text.length,
    instagramCharactersLeft : INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft : FACEBOOK_MAX_CHARACTERS - text.length
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Stats stats={stats} />
    </main>
  )
}
