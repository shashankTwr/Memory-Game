export default function getRandom(previousRandomNumber, size) {
  while (true) {
    const randomNumber = Math.floor(Math.random() * size);
    if (randomNumber !== previousRandomNumber) {
      return randomNumber;
    }
  }
}
