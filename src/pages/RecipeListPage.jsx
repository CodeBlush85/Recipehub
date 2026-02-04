/* Import the Logo component used in the header */
import { Logo } from '../components/Logo'

/* Import Chakra UI components used to build the UI and layout */
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Input,
  Tag,
  Stack,
  Flex,
  IconButton,
  Checkbox,
  CheckboxGroup,
  Container,
  useColorMode,
} from '@chakra-ui/react'

/* Import icons for the dark/light mode toggle button */
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

/* Import React hook for managing component state */
import { useState } from 'react'

/* Import recipe data from the local data file */
import { data } from '../utils/data'

/*
  RecipeListPage component
  ------------------------
  This page displays:
  - A header with logo and dark mode toggle
  - A search input for filtering recipes by name
  - Checkbox filters for dietary preferences
  - A responsive grid of recipe cards
*/
export const RecipeListPage = ({ onSelectRecipe, onGoHome }) => {


  /* State that stores the current search input value */
  const [search, setSearch] = useState('')

  /* State that stores selected dietary filters (Vegan, Vegetarian, etc.) */
  const [filters, setFilters] = useState([])

  /* Chakra hook that provides the current color mode and a toggle function */
  const { colorMode, toggleColorMode } = useColorMode()

  /*
    Create a filtered list of recipes:
    1. Extract the recipe object from each hit
    2. Filter recipes by search input (name)
    3. Filter recipes by selected health labels
  */
  const recipes = data.hits
    .map(hit => hit.recipe)
    .filter(recipe => {

      /* Check if the recipe name matches the search input */
      const matchesSearch =
        recipe.label.toLowerCase().includes(search.toLowerCase())

      /*
        Check if the recipe matches all selected filters.
        If no filters are selected, all recipes are allowed.
      */
      const matchesFilters =
        filters.length === 0 ||
        filters.every(filter =>
          recipe.healthLabels.includes(filter)
        )

      /* Only include recipes that match both conditions */
      return matchesSearch && matchesFilters
    })

  return (
    <Container maxW="container.xl" py={8}>
      <Flex
        position="sticky"
        top={0}
        zIndex={10}
        bg="rgba(255,255,255,0.85)"
        _dark={{ bg: 'rgba(26,32,44,0.85)' }}
        backdropFilter="blur(10px)"
        py={4}
      >

        {/* Left spacer to help keep the logo centered */}
        <Box flex="1" />

        {/* Center section containing the logo */}
        <Box
          flex="2"
          display="flex"
          justifyContent="center"
          cursor="pointer"
          role="button"
          tabIndex={0}
          aria-label="Go to homepage"
          onClick={onGoHome}
          onKeyDown={e => e.key === 'Enter' && onGoHome()}
          _hover={{ opacity: 0.8 }}
        >
          <Logo />
        </Box>


        {/* Right section containing the dark/light mode toggle */}
        <Box flex="1" textAlign="right">
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Box>
      </Flex>

      {/* Search input for filtering recipes by name */}
      <Input
        id="recipe-search"
        name="recipe-search"
        placeholder="Search recipes..."
        size="lg"
        mb={6}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />


      {/* Dietary filter section */}
      <Box
        mb={8}
        py={4}
        borderWidth="1px"
        borderRadius="xl"
        bg="green.50"
        _dark={{ bg: 'gray.700' }}
        textAlign="center"
      >

        <Text fontWeight="medium" mb={3}>
          Filter by diet:
        </Text>

        {/* CheckboxGroup controls multiple checkbox values */}
        <CheckboxGroup value={filters} onChange={setFilters}>
          <Stack direction="row" spacing={6} justify="center">
            <Checkbox name="diet-filter" value="Vegan">Vegan</Checkbox>
            <Checkbox name="diet-filter" value="Vegetarian">Vegetarian</Checkbox>
            <Checkbox name="diet-filter" value="Pescetarian">Pescetarian</Checkbox>
          </Stack>
        </CheckboxGroup>

      </Box>

      {/* Responsive grid displaying recipe cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {recipes.map(recipe => (
          <Box
            key={recipe.label}
            role="button"
            tabIndex={0}
            aria-label={`View recipe ${recipe.label}`}
            onClick={() => onSelectRecipe(recipe)}
            onKeyDown={e =>
              e.key === 'Enter' && onSelectRecipe(recipe)
            }
            borderRadius="2xl"
            overflow="hidden"
            borderWidth="1px"
            boxShadow="sm"
            transition="all 0.2s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg',
              borderColor: 'green.300',
              _focus: { boxShadow: 'outline' }
            }}
          >
            {/* Recipe image */}
            <Image
              src={recipe.image}
              alt={recipe.label}
              h="220px"
              w="100%"
              objectFit="cover"
            />

            {/* Recipe card content */}
            <Box p={4}>
              <Heading size="md" mb={2} noOfLines={2}>
                {recipe.label}
              </Heading>

              <Text fontSize="sm" color="chakra-subtle-text">
                {recipe.mealType?.join(', ')} • {recipe.dishType?.join(', ')}
              </Text>

              {/* Display health label tags if applicable */}
              <Stack direction="row" wrap="wrap" mt={3}>
                {recipe.healthLabels.includes('Vegan') && (
                  <Tag colorScheme="green">Vegan</Tag>
                )}
                {recipe.healthLabels.includes('Vegetarian') && (
                  <Tag colorScheme="green">Vegetarian</Tag>
                )}
                {recipe.healthLabels.includes('Pescetarian') && (
                  <Tag colorScheme="blue">Pescetarian</Tag>
                )}
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Message displayed when no recipes match search or filters */}
      {
        recipes.length === 0 && (
          <Text mt={10} textAlign="center">
            No recipes match your filters.
          </Text>
        )
      }
    </Container >
  )
}
