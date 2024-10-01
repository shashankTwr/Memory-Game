function getImageUrl(name) {
  return new URL(`../image/waifu/${name}`, import.meta.url).href;
}

const Card = ({ card, onCardClick }) => {
  return (
    <div
      className="w-64 h-80 flex flex-col items-center m-4 border-2 bg-green-900"
      onClick={() => onCardClick(card.id)}
    >
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={getImageUrl(card.image)}
        alt={card.name}
      />
      <div className="waifuName mt-2 font-extrabold text-rose-950">
        {card.name}
      </div>
    </div>
  );
};

export default Card;
