import "./App.css";
import { v4 as uuidv4 } from "uuid";
import waifuJSONData from "./data/data.json";
import CardList from "./Components/CardList";
import Layout from "./Components/Layout.JSX";
import { useState } from "react";
import getRandom from "./Components/RandomNumber";

// Map the waifu data with unique ids
const waifuList = waifuJSONData.map((waifu) => ({
  ...waifu,
  id: uuidv4(),
}));

function App() {
  const [cardList, setCardList] = useState(
    waifuList.map((waifu) => ({
      name: waifu.name,
      image: waifu.image,
      id: waifu.id,
      isClicked: false,
    }))
  );
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [randomCardId, setRandomCardId] = useState(
    cardList[getRandom(null, waifuList.length)].id
  ); // Initialize random card
  const [currentCounter, setCurrentCounter] = useState(0);
  const [maxCounter, setMaxCounter] = useState(0); // Track the maximum score

  const beginPlaying = () => {
    setCardList(
      waifuList.map((waifu) => ({
        ...waifu,
        isClicked: false,
      }))
    );
    setSelectedCardId(null);
    setRandomCardId(cardList[getRandom(null, waifuList.length)]?.id);
    setCurrentCounter(0);
    setMaxCounter(0);
  };

  const handleSelectedCard = (id) => {
    if (id === randomCardId) {
      // Correct card selected
      setCurrentCounter((prev) => prev + 1); // Increment the counter
      setRandomCardId(cardList[getRandom(randomCardId, waifuList.length)]?.id); // Pick a new random card
    } else {
      // Incorrect card selected
      setCurrentCounter(0); // Reset the counter to 0
      if (currentCounter > maxCounter) {
        setMaxCounter(currentCounter); // Update the maximum score
      }
      // Pick a new random card
      setRandomCardId(cardList[getRandom(randomCardId, waifuList.length)]?.id);
    }
    setSelectedCardId(id); // Update the selected card
  };

  return (
    <div className="App">
      {/* Header */}

      {/* Layout section for counters */}
      <div className="relative top-0 layout flex-col" onClick={beginPlaying}>
        <div>{cardList.find((card) => card.id === randomCardId)?.name}</div>
        <Layout currentCounter={currentCounter} maxCounter={maxCounter} />
      </div>

      {/* Card List */}
      <div className="card-list">
        <CardList cardList={cardList} onCardClick={handleSelectedCard} />
      </div>
    </div>
  );
}

export default App;
