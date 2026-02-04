/* 
  Import useState from React.
  This hook is used to store and update component state.
*/
import { useState } from 'react'

/* 
  Import the page components.
  These represent the two main screens of the application.
*/
import { RecipeListPage } from './pages/RecipeListPage'
import { RecipePage } from './pages/RecipePage'

/*
  App Component
  -------------
  This is the root component of the application.

  Responsibilities:
  - Keep track of which recipe is currently selected
  - Decide which page to show based on that state
*/
export const App = () => {

  /*
    State that stores the currently selected recipe.
    - null means no recipe is selected
    - a recipe object means the detail page should be shown
  */
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  /*
    Conditional rendering:
    - If a recipe is selected, show the RecipePage
    - Otherwise, show the RecipeListPage
  */
  return selectedRecipe ? (

    /* 
      Render the recipe detail page.
      - Pass the selected recipe as a prop
      - Pass a callback to reset the selected recipe when going back
    */
    <RecipePage
      recipe={selectedRecipe}
      onBack={() => setSelectedRecipe(null)}
    />

  ) : (

    /*
      Render the recipe overview page.
      - Pass a function that sets the selected recipe
      - This allows child components to control navigation
    */
    <RecipeListPage
      onSelectRecipe={setSelectedRecipe}
    />

  )
}
