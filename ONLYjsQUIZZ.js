// Zuerst: npm install prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

console.log("Willkommen zum Quizspiel!");

// Punktestand initialisieren
let score = 0;

while (true) {
  // Beispiel-Frage
  console.log("\nFrage: Was ist die Hauptstadt von Deutschland?");
  let answer = prompt("Deine Antwort: ");

  // Antwort prüfen (ohne Groß-/Kleinschreibung)
  if (answer.toLowerCase() === "berlin") {
    console.log("Richtig!");
    score++; // Punktestand erhöhen
  } else {
    console.log("Falsch! Die richtige Antwort ist Berlin.");
  }

  // Den Benutzer fragen, ob er weiterspielen möchte
  let again = prompt("Möchtest du eine weitere Frage beantworten? (ja/nein): ");
  if (again.toLowerCase() !== "ja") {
    console.log(`Quiz beendet! Deine Punktzahl: ${score}`);
    break; // Schleife beenden
  }
}
