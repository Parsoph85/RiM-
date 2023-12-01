import { Rick } from "./components/Rick";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationResidentsList } from "./components/presentational/LocationResidentsList";


function App() {
  return (
    <>
      <h1>Episodes:</h1>
      <EpisodeList />
      <h1>Locations:</h1>

      <LocationResidentsList />

    </>
  );
}

export default App;
