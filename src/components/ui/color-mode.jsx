'use client'
import {
  useColorMode,
  IconButton,
  Skeleton,
} from '@chakra-ui/react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { ClientOnly } from '@chakra-ui/react'

export const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        variant="ghost"
        size="sm"
      >
        {colorMode === 'dark' ? <LuMoon /> : <LuSun />}
      </IconButton>
    </ClientOnly>
  )
}
