# Input

The app collects one piece of user input: the name of a favorite course, typed into a `TextInput` field. As the user types, each keystroke triggers the `onChangeText` handler, which passes the current text value into the component.

# Process

The `onChangeText` handler updates a piece of state, `favoriteCourse`, using React's `useState` hook. This state update triggers a re-render of the component. Meanwhile, the app also processes three static arrays of course data (core, depth of study, and capstone), mapping over each list to generate a `Text` element per course.

# Output

The rendered output is a scrollable screen containing an icon image, the input field showing the currently typed course name, and three labeled sections listing the core requirements, depth of study courses, and capstone course. All styling is applied through `StyleSheet`, giving the yellow section headers and readable course lists shown on screen.
