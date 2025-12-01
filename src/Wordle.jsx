import { useState, useMemo } from "react";

// A decent-sized pool of 5-letter words.
// You can add/remove words as you like.
const WORD_LIST = [
  "apple", "grape", "train", "crane", "chair", "house", "mouse", "brick",
  "light", "night", "sound", "storm", "pride", "plane", "sweet", "flesh",
  "bound", "cable", "flame", "ghost", "magic", "novel", "piano", "river",
  "shore", "tiger", "vivid", "whale", "youth", "zesty", "adobe", "angle",
  "badge", "blast", "bloom", "blush", "brave", "charm", "climb", "creek",
  "dance", "draft", "elite", "faith", "focus", "globe", "grain", "harsh",
  "inner", "jelly", "karma", "laser", "lucky", "metal", "micro", "nerdy",
  "ocean", "olive", "phase", "quest", "quick", "radio", "roast", "scale",
  "scope", "sheep", "skill", "smile", "spice", "spike", "spire", "sport",
  "stack", "steel", "stone", "story", "table", "toast", "trace", "trend",
  "tribe", "trust", "value", "vital", "voice", "waltz", "woven", "xenon",
  "yield", "zonal"
];

const MAX_GUESSES = 5;

// Compute Wordle-style result for a guess
function getGuessResult(guess, target) {
  const result = Array(5).fill("absent");
  const targetLetters = target.split("");
  const letterCounts = {};

  // Count target letters
  for (const ch of targetLetters) {
    letterCounts[ch] = (letterCounts[ch] || 0) + 1;
  }

  const guessLetters = guess.split("");

  // First pass: correct positions
  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = "correct";
      letterCounts[guessLetters[i]] -= 1;
    }
  }

  // Second pass: present but wrong position
  for (let i = 0; i < 5; i++) {
    const ch = guessLetters[i];
    if (result[i] === "correct") continue;
    if (letterCounts[ch] > 0) {
      result[i] = "present";
      letterCounts[ch] -= 1;
    }
  }

  return result;
}

function getRandomWord() {
  const idx = Math.floor(Math.random() * WORD_LIST.length);
  return WORD_LIST[idx];
}

export default function Wordle() {
  const [secretWord, setSecretWord] = useState(getRandomWord);
  const [guesses, setGuesses] = useState([]); // array of strings
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("");

  const rows = useMemo(() => {
    const allRows = [];
    for (let i = 0; i < MAX_GUESSES; i++) {
      allRows.push(guesses[i] || "");
    }
    return allRows;
  }, [guesses]);

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (value.length <= 5) {
      setCurrentGuess(value);
    }
  };

  const resetGame = () => {
    setSecretWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
  };

  const handleSubmit = () => {
    if (currentGuess.length !== 5) {
      setMessage("Guess must be exactly 5 letters.");
      return;
    }

    const nextGuesses = [...guesses, currentGuess];
    setGuesses(nextGuesses);

    const isCorrect = currentGuess === secretWord;

    if (isCorrect) {
      setMessage(
        `🎉 Congrats! You got it: ${secretWord.toUpperCase()}. New word loaded.`
      );
      resetGame();
      return;
    }

    if (nextGuesses.length >= MAX_GUESSES) {
      setMessage(
        `❌ Out of guesses! The word was ${secretWord.toUpperCase()}. New word loaded.`
      );
      resetGame();
      return;
    }

    setMessage("Try again!");
    setCurrentGuess("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 pb-10">
      <h2 className="text-2xl font-bold text-gray-800">Wordle-Style Game</h2>
      <p className="text-gray-700 text-center max-w-xl">
        Guess the hidden 5-letter word. You have {MAX_GUESSES} attempts.
        Green = correct letter & position, yellow = letter in the word but wrong
        position, gray = not in the word.
      </p>

      {/* Grid */}
      <div className="space-y-2">
        {rows.map((rowGuess, rowIndex) => {
          const filled = rowGuess.length === 5;
          const result = filled ? getGuessResult(rowGuess, secretWord) : [];

          return (
            <div key={rowIndex} className="flex space-x-2 justify-center">
              {Array.from({ length: 5 }).map((_, colIndex) => {
                const letter = rowGuess[colIndex] || "";
                const status = result[colIndex] || "";
                let extraClasses = "bg-white border-gray-300";

                if (status === "correct") {
                  extraClasses = "bg-green-500 border-green-500 text-white";
                } else if (status === "present") {
                  extraClasses = "bg-yellow-400 border-yellow-400 text-white";
                } else if (letter && !status) {
                  // a filled but un-scored cell (current row before submit)
                  extraClasses = "bg-gray-300 border-gray-300 text-white";
                }

                return (
                  <div
                    key={colIndex}
                    className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold uppercase rounded ${extraClasses}`}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={currentGuess}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="border border-gray-400 rounded px-3 py-2 uppercase tracking-widest text-center w-40 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type 5-letter word"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-full font-semibold bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Guess
        </button>
      </div>

      {message && (
        <p className="text-center text-gray-800 font-medium max-w-md px-4">
          {message}
        </p>
      )}
    </div>
  );
}
