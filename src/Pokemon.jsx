// //skriv ut
// Namn
// Bild på en Pokemon
// Vilken/Vilka typer din pokemon har (dvs “types” i API:et)
// Vikt
// Längd
export default function Pokemon({ image, name, types, weight, height , hp, attack, specialAttack, defense, specialDefense, speed}) {

  
  return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <ul>
          <p><strong>{types}</strong></p>{" "}
        </ul>
        <p><strong>Weight: {weight} lbs</strong></p>
        <p><strong>Height: {height}</strong></p>
        <p><strong>HP: {hp}</strong></p>
        <p><strong>Attack: {attack}</strong></p>
        <p><strong>Special Attack: {specialAttack}</strong></p>
        <p><strong>Defense: {defense}</strong></p>
        <p><strong>Special Defense: {specialDefense}</strong></p>
        <p><strong>Speed: {speed}</strong></p>

      </div>
    );
  }
  