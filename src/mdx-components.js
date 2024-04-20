// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    a: ({ href, children }) => (
      <a className="underline font-semibold" href={href}>
        {children}
      </a>
    ),
    ...components,
  };
}
