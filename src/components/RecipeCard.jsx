import Card from "./Card"

const RecipeCard = ({recipe}) => {
    return <Card title={recipe.title} image={recipe.image}>
        {recipe.summary}
    </Card>
}

export { RecipeCard }
