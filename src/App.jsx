import { Rick } from "./components/Rick";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationList } from './components/LocationList';

function App() {
  return (
    <>
      <EpisodeList />
      <LocationList />
    </>
  );
}

export default App;
