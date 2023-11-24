// //skriv ut
// Namn
// Bild på en Pokemon
// Vilken/Vilka typer din pokemon har (dvs “types” i API:et)
// Vikt
// Längd
export default function Pokemon({ image, name, types, weight, height }) {
    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <ul>
          <p><strong>{types}</strong></p>{" "}
        </ul>
        <p><strong>Weight: {weight} lbs</strong></p>
        <p><strong>Height: {height}</strong></p>
      </div>
    );
  }
  