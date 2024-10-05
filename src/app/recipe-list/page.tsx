
import RecipeList from "@/components/recipe-list"

async function fetchListOfRecipes() {
    try{
        const apiResponse=await fetch("https://dummyjson.com/recipes");
        const res =await apiResponse.json();
        return res?.recipes;
    }catch(e){
      throw new Error(e);
    }
}


export default async function Recipes(){
    
    const recipeList=await fetchListOfRecipes();
    return <div>
        <RecipeList recipeList={recipeList}/>
    </div>
}