// Available themes - add new themes here
export const THEMES = ['dark', 'win95'] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
  dark: 'Dark',
  win95: 'Win95',
};

export const getTheme = (): Theme => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    const stored = localStorage.getItem("theme") as Theme;
    if (THEMES.includes(stored)) {
      return stored;
    }
  }
  return 'dark'; // default theme
};

export function setTheme(theme: Theme) {
  // Remove all theme classes
  THEMES.forEach((t) => document.documentElement.classList.remove(t));
  // Set new theme
  window.localStorage.setItem('theme', theme);
  document.documentElement.classList.add(theme);
}

export function getNextTheme(current: Theme): Theme {
  const currentIndex = THEMES.indexOf(current);
  const nextIndex = (currentIndex + 1) % THEMES.length;
  return THEMES[nextIndex];
}

export function setUpClientThemeScripts() {
  const startViewTransition = (fn: () => void) => document.startViewTransition?.(fn) ?? fn();

  const setUpThemeScripts = () => {
    // Set the initial theme
    const currentTheme = getTheme();
    setTheme(currentTheme);

    // Event listener for theme toggling via data-theme-set (specific theme)
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button[data-theme-set]') as HTMLButtonElement | null;
      if (button) {
        const theme = button.dataset.themeSet as Theme;
        if (THEMES.includes(theme)) {
          startViewTransition(() => setTheme(theme));
          // Update active state on all theme buttons
          document.querySelectorAll('button[data-theme-set]').forEach((btn) => {
            btn.classList.toggle('active', (btn as HTMLButtonElement).dataset.themeSet === theme);
          });
        }
      }
    });
  };

  // Set up on first pageload
  setUpThemeScripts();
  // Run the setup function when the page is swapped (view transitions)
  document.addEventListener("astro:after-swap", setUpThemeScripts);
}
