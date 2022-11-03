import { useEffect, useState } from 'react';

export const isDarkMode = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
export function useIsDarkmode() {
  const [isDark, setIsDark] = useState(isDarkMode)

  useEffect(() => {
    const handleOnChange = () => {
      setIsDark(isDarkMode)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleOnChange);
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleOnChange)

  }, [])

  return isDark
}