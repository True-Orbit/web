declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elemName: string]: any;
  }
}
