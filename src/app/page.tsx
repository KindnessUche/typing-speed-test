import TypePage from "./components/TypePage";

export default async function Home() {
  const fetchStory = async () => {
    "use server";
    try {
      const data = await fetch("https://shortstories-api.onrender.com/");
      const storyApi = await data.json();
      return storyApi.story;
    } catch (error) {
      console.error("API call failed", error);
      return "The Lion had been badly hurt by the horns of a Goat, which he was eating. He was very angry to think that any animal that he chose for a meal, should be so brazen as to wear such dangerous things as horns to scratch him while he ate. So he commanded that all animals with horns should leave his domains within twenty-four hours. The command struck terror among the beasts. All those who were so unfortunate as to have horns, began to pack up and move out. Even the Hare, who, as you know, has no horns and so had nothing to fear, passed a very restless night, dreaming awful dreams about the fearful Lion. And when he came out of the warren in the early morning sunshine, and there saw the shadow cast by his long and pointed ears, a terrible fright seized him. 'Goodby, neighbor Cricket,' he called. 'I am off. He will certainly make out that my ears are horns, no matter what I say.'";
    }
  };

  const initialStory = await fetchStory();

  return (
    <div className="flex flex-col items-center min-h-screen font-sans">
      <TypePage
        initialText={initialStory}
        initialNextStory={initialStory}
        fetchNewStory={fetchStory}
      />
    </div>
  );
}
