import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations";

export const LocationResidentsList = () => {
  const { locations } = useLocations();
  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="locations-container"
          title={location.name + ":" + location.type + " with " + location.residents.length + " resident(s)."}
          content={location.residents == false ? "No residents here..." : <CharacterList
                    ids={
                        location.residents.map((character) => {
                        const id = character.split("/").pop();
                        return id;
                    })}
                />}


        />
      ))}
    </div>
  );
};
