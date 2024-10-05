import Link from "next/link";

export default function Home() {
  return (
        <div>
          <h1>Welcome to the Recipe app</h1>
          <Link href={"/recipe-list"}>RecipeList</Link>
        </div>
  );
}
