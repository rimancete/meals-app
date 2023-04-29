function theme() {
  return {
    ioShadow: {
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
    },
    pressableIOSRiple: {
      button: {
        flex: 1,
      },
      buttonPressed: {
        opacity: 0.5,
      },
    },
    colors: {
      secondary: {
        light: "#e2b497",
        dark: "#351401",
      },
    },
  };
}
export default theme;
