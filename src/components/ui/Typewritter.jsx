import { useState, useEffect } from "react";

export function TypewriterEffect({ words, speed = 150 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex].text;

    let timeout;
    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, speed]);

  return (
    <h1 className="text-lg sm:text-2xl font-semibold mt-1 ml-1 text-[var(--color-brand-primary)] animate-pulse">
      {displayedText}
      <span className=" dark:text-[var(--color-brand-primary)] inline-block w-[3px] h-4 sm:h-5 bg-[var(--color-brand-primary)] ml-1 animate-pulse">
        {/* | */}
        </span>
    </h1>
  );
}