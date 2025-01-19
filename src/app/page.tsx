import TypePage from "./components/TypePage";

export default async function Home() {
  // const data = await fetch("https://shortstories-api.onrender.com/");
  // const storyApi = await data.json();
  // const story = storyApi.story;
  return (
    <div className="flex flex-col items-center min-h-screen">
      <TypePage
        text={
          "hwik sdh d dhn h fj v s fhudjsfhu sxh fjf shj fhujf nsujz fhufjz fhusjzfn huzhsfjf ujznfjnzs fjkncm sff hfshweuwhjd nfyegy hjff df sg f thr g fds ghgfdergtygfds chgf df h yf dghgh fddfhj  f gfh fd fgb"
        }
        // text={story}
      />
    </div>
  );
}
