# Pokémon App

Welcome to the Pokémon App! This is a simple Angular application that allows you to view information about the first 151 Pokémon, including their name, image, types, and stats. The app features a dynamic search bar, dark and light mode toggling, and a responsive layout.

## Features
- **Pokédex**: View details for the first 151 Pokémon.
- **Search**: Filter Pokémon by name.
- **Dark and Light Mode**: Toggle between dark and light mode.
- **Responsive Layout**: Optimized for both desktop and mobile view.
- **Types**: Display Pokémon types with styled icons.
- **Stats**: View individual Pokémon stats and total stats.

## Technologies Used
- **Angular**: Frontend framework for building the app.
- **CSS**: Styling for light and dark modes and responsive layout.
- **Pokémon API**: Fetches Pokémon data (or locally stored data for demo purposes).

## Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Steps to Run the App Locally

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/pokemon-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd pokemon-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    ng serve
    ```

5. Open your browser and go to `http://localhost:4200/` to see the app in action.

## How It Works
- The app fetches Pokémon data (or uses a locally stored JSON file for this demo) and displays it in a table.
- The table includes columns for the Pokémon's ID, name, image, types, and stats.
- Users can filter the list of Pokémon by entering a search term in the search bar.
- The app supports both dark and light themes, which can be toggled using the button on the top-right corner of the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the open-source community and contributors for making Pokémon data and related resources available!
- Thanks to [Pokémon API](https://pokeapi.co/) for providing the data source for Pokémon information (if you're using it in your app).
