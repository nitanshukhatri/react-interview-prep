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

// HTML &Css
// middleware thunk
// react redux store write from beginning
// react class component compare with hooks
// two co
// resuble popover outside click
// system design.
// input component only text as input.

// use reducer &context api

// redux store create use yourself

// optimozation.
