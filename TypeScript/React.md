# React TypeScript Cheatsheet

Documentation link:
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context

## Children 
There are two common paths to describing the children of a component. The first is to use the React.ReactNode type, which is a union of all the possible types that can be passed as children in JSX:

```TSX
interface ModalRendererProps {
  title: string;
  children: React.ReactNode;
}
```

This is a very broad definition of children. The second is to use the React.ReactElement type, which is only JSX elements and not JavaScript primitives like strings or numbers:

```TSX
interface ModalRendererProps {
  title: string;
  children: React.ReactElement;
}
```

Note, that you cannot use TypeScript to describe that the children are a certain type of JSX elements, so you cannot use the type-system to describe a component which only accepts `<li>` children.

You can see an example of both React.ReactNode and React.ReactElement with the type-checker in this TypeScript playground.

## Style Props 
When using inline styles in React, you can use React.CSSProperties to describe the object passed to the style prop. This type is a union of all the possible CSS properties, and is a good way to ensure you are passing valid CSS properties to the style prop, and to get auto-complete in your editor.

```TSX
interface MyComponentProps {
  style: React.CSSProperties;
}
```

