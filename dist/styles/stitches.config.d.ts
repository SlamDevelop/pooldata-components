export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    rgb: {
        blue: string;
        yellow: string;
    };
    colors: {
        white: string;
        blue: string;
        yellow: string;
        yellowDark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    borderRadius: {
        1: string;
        2: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    backgroundRGBA: (rgb: string) => {
        '$$background-color-opacity': number;
        backgroundColor: string;
    };
    backgroundOpacity: (opacity: number) => {
        '$$background-color-opacity': string;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    rgb: {
        blue: string;
        yellow: string;
    };
    colors: {
        white: string;
        blue: string;
        yellow: string;
        yellowDark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    borderRadius: {
        1: string;
        2: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    backgroundRGBA: (rgb: string) => {
        '$$background-color-opacity': number;
        backgroundColor: string;
    };
    backgroundOpacity: (opacity: number) => {
        '$$background-color-opacity': string;
    };
}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    rgb: {
        blue: string;
        yellow: string;
    };
    colors: {
        white: string;
        blue: string;
        yellow: string;
        yellowDark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    borderRadius: {
        1: string;
        2: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    backgroundRGBA: (rgb: string) => {
        '$$background-color-opacity': number;
        backgroundColor: string;
    };
    backgroundOpacity: (opacity: number) => {
        '$$background-color-opacity': string;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
        rgb: {
            blue: string;
            yellow: string;
        };
        colors: {
            white: string;
            blue: string;
            yellow: string;
            yellowDark: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        borderRadius: {
            1: string;
            2: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        backgroundRGBA: (rgb: string) => {
            '$$background-color-opacity': number;
            backgroundColor: string;
        };
        backgroundOpacity: (opacity: number) => {
            '$$background-color-opacity': string;
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
    rgb: {
        blue: string;
        yellow: string;
    };
    colors: {
        white: string;
        blue: string;
        yellow: string;
        yellowDark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    borderRadius: {
        1: string;
        2: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    backgroundRGBA: (rgb: string) => {
        '$$background-color-opacity': number;
        backgroundColor: string;
    };
    backgroundOpacity: (opacity: number) => {
        '$$background-color-opacity': string;
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
        rgb: {
            blue: string;
            yellow: string;
        };
        colors: {
            white: string;
            blue: string;
            yellow: string;
            yellowDark: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        borderRadius: {
            1: string;
            2: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        backgroundRGBA: (rgb: string) => {
            '$$background-color-opacity': number;
            backgroundColor: string;
        };
        backgroundOpacity: (opacity: number) => {
            '$$background-color-opacity': string;
        };
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    rgb: {
        blue: import("@stitches/react/types/theme").Token<"blue", string, "rgb", "">;
        yellow: import("@stitches/react/types/theme").Token<"yellow", string, "rgb", "">;
    };
    colors: {
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", "">;
        blue: import("@stitches/react/types/theme").Token<"blue", string, "colors", "">;
        yellow: import("@stitches/react/types/theme").Token<"yellow", string, "colors", "">;
        yellowDark: import("@stitches/react/types/theme").Token<"yellowDark", string, "colors", "">;
    };
    space: {
        1: import("@stitches/react/types/theme").Token<"1", string, "space", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "space", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "space", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "space", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "space", "">;
    };
    fontSizes: {
        1: import("@stitches/react/types/theme").Token<"1", string, "fontSizes", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "fontSizes", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "fontSizes", "">;
    };
    borderRadius: {
        1: import("@stitches/react/types/theme").Token<"1", string, "borderRadius", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "borderRadius", "">;
    };
}, createTheme: <Argument0 extends string | ({
    rgb?: {
        blue?: string | number | boolean | undefined;
        yellow?: string | number | boolean | undefined;
    } | undefined;
    colors?: {
        white?: string | number | boolean | undefined;
        blue?: string | number | boolean | undefined;
        yellow?: string | number | boolean | undefined;
        yellowDark?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
    } | undefined;
    borderRadius?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    rgb?: {
        blue?: string | number | boolean | undefined;
        yellow?: string | number | boolean | undefined;
    } | undefined;
    colors?: {
        white?: string | number | boolean | undefined;
        blue?: string | number | boolean | undefined;
        yellow?: string | number | boolean | undefined;
        yellowDark?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
    } | undefined;
    borderRadius?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {};
    theme: {
        rgb: {
            blue: string;
            yellow: string;
        };
        colors: {
            white: string;
            blue: string;
            yellow: string;
            yellowDark: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        borderRadius: {
            1: string;
            2: string;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        backgroundRGBA: (rgb: string) => {
            '$$background-color-opacity': number;
            backgroundColor: string;
        };
        backgroundOpacity: (opacity: number) => {
            '$$background-color-opacity': string;
        };
    };
};
