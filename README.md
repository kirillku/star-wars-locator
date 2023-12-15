# Star Wars Locator

Coding assignment for [star-wars-frontend](https://github.com/aseevia/star-wars-frontend).

Demo: [Star Wars Locator](https://kirillku.github.io/star-wars-locator/)

## Technical Decisions

- `Vite` for bundling because it's simple and no need in custom config for such project
- `React` because I know it better than other frameworks
- Plain `React` because I don't need any extra features that React frameworks provide
- Plain CSS for styling because the project is small and I only need a few classes
- Keeping app state in the top component (while logic is in the hooks) because again the project is small and doesn't even need a React Context
- `fetch` for HTTP reqeusts to keep app simple, it's good enough to make these two get API calls
- OpenLayers for map rendering because it's used in Grundium (based on job ad)
