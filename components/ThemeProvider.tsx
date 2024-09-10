'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ReactNode } from 'react';

interface Props extends ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider ({children, ...props}:ThemeProviderProps){
    return <NextThemesProvider {...props}>{children}

    </NextThemesProvider>
}