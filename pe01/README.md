# PE01 - HelloWorld React Native App

## Input

This program has no interactive user input from the keyboard, touchscreen, or external files. Instead, the "input" consists of the static values hard-coded directly into the source code: the text strings "Thao Bui", "MSCS", and "STC", along with the style values defined in the `StyleSheet` object (background color, text color, font size, and layout properties like `alignItems` and `justifyContent`). These predefined values serve as the data the program uses to build its output.

## Process

The `App` function processes these inputs by returning a JSX tree: a single `View` component acts as a container, wrapping three `Text` components, one for each string. React Native then processes this JSX during rendering, applying the corresponding styles from `StyleSheet.create()` to each component to determine color, size, spacing, and alignment.

## Output

The final output is a rendered mobile screen displaying a yellow background with "Sam Chung," "MSCS," and "STC" centered vertically and horizontally in black text.
