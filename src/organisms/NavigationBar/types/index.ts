import { leet } from "../themes";
import { GlobalTheme } from "../../../theme";

// can't extend enums... :(
export const NavigationBarTheme = {
    ...GlobalTheme,
} as const;

export const ThemeSelector = {
    [GlobalTheme.LEET]: leet,
} as const;