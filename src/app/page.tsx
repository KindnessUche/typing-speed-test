import { sentence } from "./components/index.js";
import TypePage from "./components/TypePage";

export default async function Home() {
  const data = await fetch("https://shortstories-api.onrender.com/");
  const storyApi = await data.json();
  const story = storyApi.story;
  return (
    <div className="flex flex-col items-center min-h-screen">
      <TypePage text={story} />
    </div>
  );
}
