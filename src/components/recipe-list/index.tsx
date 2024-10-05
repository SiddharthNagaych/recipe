
import Link from "next/link";
interface Recipe {
    id: string;
    image: string;
    name: string;
    rating:number;
    cuisine:string;
  }
import { Card,CardContent } from "../ui/card";
export default function RecipeList({recipeList}:{recipeList:Recipe[]}){
    console.log(recipeList);
    return <div>
       <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
           <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                recipeList &&recipeList.length>0?
                
                recipeList.map(recipe=> <Link href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md cursur-pointer hover:scale-[1.3] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                         <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover object-top"/>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg fong-bold text-gray-800">
                        {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                            <p className="text-lg text-gray-900">Rating:{recipe.rating}</p>
                            <div className="ml-auto">
                                <p>{recipe.cuisine}</p>
                            </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>)
                :null
            }

           </div>
       </div>
    </div>
}