import { sentence } from "./components/index.js";
import TypePage from "./components/TypePage";

export default function Home() {
  return (
    <div className="w-full">
      <TypePage text={sentence.words} />
    </div>
  );
}
