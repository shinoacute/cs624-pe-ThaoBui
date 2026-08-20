# Input

The app receives user input through AddCity and AddCountry screens. Users enter a city and country, or a country name and currency, in text fields. Pressing the button sends these values to handlers. Validation prevents empty submissions, while each record receives an identifier before entering application state.

# Process

App.js acts as the processing component. Its state stores arrays of cities and countries. addCity and addCountry update those arrays immutably, preserving existing records while appending new ones. Navigation connects forms to corresponding lists. City records also support location updates, demonstrating how related data can be changed after creation.

# Output

The Cities and Countries tabs present the processed data as scrollable lists. Each city displays its name and country, while each country displays its name and currency. When an array is empty, CenterMessage communicates that no records are saved. Thus, the interface completes the input-process-output cycle by converting form entries into visible, organized information.
