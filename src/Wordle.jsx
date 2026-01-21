import { useState, useMemo, useEffect } from "react";

const WORDS_URL = "https://www.avinashdashin.com/nordle.json";
const MAX_GUESSES = 5;

// Compute Wordle-style result for a guess
function getGuessResult(guess, target) {
  const result = Array(5).fill("absent");
  const targetLetters = target.split("");
  const letterCounts = {};

  for (const ch of targetLetters) {
    letterCounts[ch] = (letterCounts[ch] || 0) + 1;
  }

  const guessLetters = guess.split("");

  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = "correct";
      letterCounts[guessLetters[i]] -= 1;
    }
  }

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

function normalizeWords(raw) {
  // Supports either:
  // 1) ["apple", "grape", ...]
  // 2) { words: ["apple", ...] }
  const arr = Array.isArray(raw) ? raw : Array.isArray(raw?.words) ? raw.words : [];
  return arr
    .map((w) => String(w).toLowerCase().trim())
    .filter((w) => /^[a-z]{5}$/.test(w));
}

function pickRandomWord(words) {
  const idx = Math.floor(Math.random() * words.length);
  return words[idx];
}

export default function Wordle() {
  const [secretWord, setSecretWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("");

  // NEW: store word list + set for validation
  const [wordList, setWordList] = useState([]); // array of valid 5-letter words
  const [wordSet, setWordSet] = useState(null); // Set for fast membership check

  // Load the word list once on mount, then choose secret word from it
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(WORDS_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch word list: ${res.status}`);

        const data = await res.json();
        const words = normalizeWords(data);

        if (words.length === 0) throw new Error("No valid 5-letter words found in nordle.json");

        setWordList(words);
        setWordSet(new Set(words));
        setSecretWord(pickRandomWord(words));
      } catch (e) {
        setMessage("Could not load word list from nordle.json.");
      }
    })();
  }, []);

  const rows = useMemo(() => {
    const allRows = [];
    for (let i = 0; i < MAX_GUESSES; i++) {
      allRows.push(guesses[i] || "");
    }
    return allRows;
  }, [guesses]);

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (value.length <= 5) setCurrentGuess(value);
  };

  // Reset game: reuse loaded list (no refetch)
  const resetGame = () => {
    if (!wordList.length) return;
    setSecretWord(pickRandomWord(wordList));
    setGuesses([]);
    setCurrentGuess("");
    setMessage("");
  };

  const handleSubmit = () => {
    if (currentGuess.length !== 5) {
      setMessage("Guess must be exactly 5 letters.");
      return;
    }

    // NEW: validate against the word list
    if (!wordSet || !wordSet.has(currentGuess)) {
      setMessage("Not a valid word");
      return; // IMPORTANT: do NOT consume a guess
    }

    const nextGuesses = [...guesses, currentGuess];
    setGuesses(nextGuesses);

    const isCorrect = currentGuess === secretWord;

    if (isCorrect) {
      setMessage(`🎉 Congrats! You got it: ${secretWord.toUpperCase()}. New word loaded.`);
      resetGame();
      return;
    }

    if (nextGuesses.length >= MAX_GUESSES) {
      setMessage(`❌ Out of guesses! The word was ${secretWord.toUpperCase()}. New word loaded.`);
      resetGame();
      return;
    }

    setMessage("Try again!");
    setCurrentGuess("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  // If the word list hasn't loaded yet, show loading
  if (!secretWord) {
    return <div className="p-6 text-gray-700">Loading word list…</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-6 pb-10">
      <h2 className="text-2xl font-bold text-gray-800">Wordle-Style Game</h2>

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
