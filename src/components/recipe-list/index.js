import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">RecipeList</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={'/recipe-list/${recipe.id}'}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadpw-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 ">
                        <img src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover"
                        
                        />
                        <h1>{recipe.name}</h1>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
