'use client'
import {ThemeProvider as NextThemesProvider} from 'next-themes'
import Header from '../Layout/header'
import {cn} from '@/lib/utils'

interface ExtendedThemeProviderProps extends ThemeProviderProps {
    containerClassName?:string;
}


export function ThemeProvider({
    children,
    containerClassName,
    ...props 
} : ExtendedThemeProviderProps){

    return(
        <NextThemesProvider {...props}>
            <Header/>
            <main className={cn('container mx-auto px4', containerClassName)}>
                {children}
            </main>
            {/* Footer components  for later */}

        </NextThemesProvider>
    )
}
