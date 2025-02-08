'use client'

import { createContext, useContext } from 'react'

export const ThemeContext = createContext({})

export function useTheme() {
    const context = useContext(ThemeContext)

    const setTheme = (theme: string) => {
    }

    return [
        context
    ]
}

export default function ThemeProvider({children}: {
    children: React.ReactNode
}) {
    return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
