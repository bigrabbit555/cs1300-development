# Development

### Link to Deployed Website
`https://bigrabbit555.github.io/cs1300-development`

### Goal and Value of the Application
This application allows users to find and purchase the kitties that are most well suited to them.  Users can do this by filtering and sorting kitties according to attributes they deem desirable, and then adding the kitties they want to their cart.

### Usability Principles Considered
I aimed to make the functionality of the site as clear as possible by clearly labeling different areas according to their purpose.  There is also a hierarchy with a menu bar at the top for filtering and sorting, with the results displayed below so that users can immediately see the result of their selections.  The cart is located to the side of the displayed kitties so that users can see it update live as they browse.

### Organization of Components
Components are organized into functional and aesthetic groups.  The major components are a TopBar, which is home to all the sorting and filtering inputs; a KittyDisplay, which displays each different kitty as a KittyItem; and a Cart, which handles the aggregation of kitties that have been added to it.

### How Data is Passed Down Through Components
Data is passed down through components using React's props, and passed back up using setter functions.

### How the User Triggers State Changes
The user triggers state changes by interacting with text boxes and buttons on the page.  React then re-renders the page to reflect the updated states.