import React from "react";

export const Breakpoints = (windowWidth) => {
  const [currentWindowWidth, setWindowWidth] = React.useState(windowWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getStyles = () => {
    // Definiere deine Breakpoints und Stile hier
    const breakpoints = [
      {
        name: "extra-small",
        width: 576,
        fontSize: "1.5rem",
        color: "purple",
        margin: "5rem",
        padding: "1rem",
        textAlignment: "center",
      },
      {
        name: "small",
        width: 768,
        fontSize: "2rem",
        color: "blue",
        margin: "5rem",
        padding: "1.5rem",
        textAlignment: "center",
      },
      {
        name: "medium",
        width: 992,
        fontSize: "2.5rem",
        color: "green",
        margin: "5rem",
        padding: "2rem",
        textAlignment: "center",
      },
      {
        name: "large",
        width: 1200,
        fontSize: "3rem",
        color: "orange",
        margin: "5rem",
        padding: "2.5rem",
        textAlignment: "center",
      },
      {
        name: "extra-large",
        width: 1600,
        fontSize: "3.5rem",
        color: "red",
        margin: "5rem",
        padding: "3rem",
        textAlignment: "center",
      },
    ];

    const { fontSize, color, margin, padding, textAlignment } =
      breakpoints.reduce((prev, curr) => {
        if (currentWindowWidth >= curr.width) {
          return curr;
        }
        return prev;
      });

    return { fontSize, color, margin, padding, textAlignment };
  };

  return getStyles();
};
