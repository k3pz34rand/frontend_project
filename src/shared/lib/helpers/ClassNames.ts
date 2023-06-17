type modsType = Record<string, string | boolean>;

export const ClassNames = (
    cls: string,
    mods: modsType = {},
    additionaly: string[] = []
): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, bool]) => Boolean(bool))
            .map(([className]) => String(className)),
        ...additionaly.filter(Boolean),
    ].join(" ");
};
