export let container = ({
  screens = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
  center,
  padding,
}: {
  screens?: Record<string, string>;
  center?: boolean;
  padding?: string | Record<string, string>;
}) => {
  return {
    width: "100%",
    padding: typeof padding == "object" ? padding.DEFAULT : padding,
    marginLeft: center ? "auto" : undefined,
    marginRight: center ? "auto" : undefined,
    ...Object.fromEntries(
      Object.entries(screens).map(([key, value]) => [
        `@media (min-width: ${value})`,
        {
          maxWidth: value,
          padding: typeof padding == "object" && padding[value],
        },
      ])
    ),
  };
};
