export function withStyles(Component: any) {
  return (props: any) => {
    const style = {
      padding: "0.2em",
      margin: "1rem",
      ...props.style,
    };
    return <Component style={style} {...props}></Component>;
  };
}
