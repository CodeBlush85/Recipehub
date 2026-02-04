import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Stack,
  Tag,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { Logo } from '../components/Logo'

export const RecipePage = ({ recipe, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const n = recipe.totalNutrients

  return (
    <Box p={{ base: 4, md: 6 }} maxW="900px" mx="auto">
      {/* 
        Centered logo at the top of the page.
        Acts as a home button that returns the user
        to the recipe overview page.
      */}
      <Box
        mb={4}
        display="flex"
        justifyContent="center"
        cursor="pointer"
        role="button"
        tabIndex={0}
        aria-label="Go to homepage"
        onClick={onBack}
        onKeyDown={e => e.key === 'Enter' && onBack()}
      >
        <Logo />
      </Box>

      {/* 
        Back button aligned to the left.
        Uses the same onBack function to return
        to the recipe overview page.
      */}
      <Button
        mb={6}
        colorScheme="green"
        onClick={onBack}
      >
        ← Back to recipes
      </Button>

      {/* 
        Main recipe card.
        Contains the recipe image and primary information.
      */}
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="md"
      >
        {/* Recipe image */}
        <Image
          src={recipe.image}
          alt={recipe.label}
          w="100%"
          h={{ base: '220px', md: '360px' }}
          objectFit="cover"
        />

        {/* Recipe title and metadata */}
        <Box p={{ base: 4, md: 6 }}>
          <Heading mb={2}>
            {recipe.label}
          </Heading>

          {/* Meal type and dish type */}
          <Text color="chakra-subtle-text" mb={3}>
            {recipe.mealType?.join(', ')} • {recipe.dishType?.join(', ')}
          </Text>

          {/* Tags displaying servings and cooking time */}
          <Stack direction="row" spacing={3} wrap="wrap">
            <Tag borderRadius="full">
              Servings: {recipe.yield}
            </Tag>

            <Tag borderRadius="full">
              Cooking time:{' '}
              {recipe.totalTime > 0 ? `${recipe.totalTime} min` : 'N/A'}
            </Tag>
          </Stack>
        </Box>
      </Box>

      {/* 
        Ingredients section.
        Displays all ingredient lines in a list.
      */}
      <Box
        mt={8}
        p={{ base: 4, md: 6 }}
        borderWidth="1px"
        borderRadius="xl"
      >
        <Heading size="md" color="green.600" mb={4}>
          Ingredients
        </Heading>

        <List spacing={2}>
          {recipe.ingredientLines.map(line => (
            <ListItem key={line}>
              • {line}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* 
        Nutrients section.
        Displays key nutritional values in a responsive grid.
      */}
      <Box
        mt={6}
        p={{ base: 4, md: 6 }}
        borderWidth="1px"
        borderRadius="xl"
      >
        <Heading size="md" mb={4}>
          Nutrients
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
          <Text>Energy: {n.ENERC_KCAL.quantity.toFixed(0)} kcal</Text>
          <Text>Protein: {n.PROCNT.quantity.toFixed(1)} g</Text>
          <Text>Fat: {n.FAT.quantity.toFixed(1)} g</Text>
          <Text>Carbs: {n.CHOCDF.quantity.toFixed(1)} g</Text>
          <Text>Cholesterol: {n.CHOLE.quantity.toFixed(1)} mg</Text>
          <Text>Sodium: {n.NA.quantity.toFixed(1)} mg</Text>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
