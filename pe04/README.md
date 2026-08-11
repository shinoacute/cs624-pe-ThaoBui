# Input
 
The app takes a static profile object (`name`, `occupation`, `description`, and a local image) and generates an array of six identical card entries. Each entry also carries a `showThumbnail` boolean, which starts as `true`. User interaction — tapping a card via `TouchableHighlight` — serves as the runtime input that drives state changes.
 
# Process
 
`App` holds the card data in state and passes each item to a reusable `ProfileCard` component as props. When a card is tapped, `handleProfileCardPress` uses `immutability-helper` to toggle that card's `showThumbnail` flag while resetting any other expanded card back to thumbnail size, ensuring only one card is expanded at a time.
 
# Output
 
The screen displays six cards in a wrapped grid. Tapped cards expand to show full name, occupation, and description with black text and a divider; others remain scaled-down thumbnails, giving the gallery an interactive, focus-one-card visual layout.
 
