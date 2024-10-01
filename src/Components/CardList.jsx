import Card from "./Card";

const CardList = ({ cardList, onCardClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-5">
      {cardList.map((card) => {
        return <Card key={card.id} card={card} onCardClick={onCardClick} />;
      })}
    </div>
  );
};

export default CardList;
