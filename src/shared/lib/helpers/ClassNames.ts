type modsType = Record<string, string | boolean>;

export const ClassNames = (
    cls: string,
    mods: modsType,
    additionaly: string[]
) => {
    return [
        cls,
        ...Object.entries(mods)
            .filter((className, bool) => Boolean(bool))
            .map(([className, bool]) => String(className)),
        ...additionaly,
    ].join(" ");
};
