import { useLocation, useParams } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";

const RecipePage = () => {
  const recipe = {
    title: "Æblekage",
    image:
      "https://www.fabfood4all.co.uk/wp-content/uploads/2013/09/Danish-Apple-Cake-024-LR2-1024x640.jpg",
    summary: `Danish Apple Cake (Æblekage) is not actually a cake but a traditional Danish dessert comprising of layers of stewed apples, caramelised oats and finished off with whipped cream.`,
  };

  return (
    <>
      <div className="container">
        <h1>Recipes</h1>
        <RecipeCard recipe={recipe} />
      </div>
    </>
  );
};

export default RecipePage;
