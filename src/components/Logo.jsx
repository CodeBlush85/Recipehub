import { HStack, Text, Box } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <HStack spacing={2}>
      <Box
        w="10px"
        h="10px"
        borderRadius="full"
        bg="green.500"
      />

      <Text fontWeight="bold" fontSize="lg" letterSpacing="tight">
        Recipe<span style={{ color: '#38A169' }}>Hub</span>
      </Text>
    </HStack>
  )
}

/* 
    Flex container for the header.
    - Uses Flexbox to align items horizontally
    - Stays visible at the top while scrolling (sticky header)
  */
/*position="sticky"
 top={0}              // Stick the header to the top of the viewport
 zIndex={10}          // Ensure header stays above other content
 bg="chakra-body-bg"  // Uses Chakra's default background (light/dark aware)
 borderBottomWidth="1px" // Subtle bottom border to separate header from content
 py={4}               // Vertical padding (top & bottom)
 mb={6}               // Margin below the header
 align="center"       // Vertically center all child items
 */
/*
   Left spacer:
   - Takes up equal space as the right side
   - Helps keep the logo perfectly centered
 */
/*
   Center section:
   - Contains the Logo component
   - flex="2" makes this section wider than the sides
   - display="flex" + justifyContent="center" centers the logo horizontally
 */
/*
   Right section:
   - Contains the dark/light mode toggle button
   - flex="1" balances the left spacer
   - textAlign="right" aligns the button to the right edge
 */