"use client";

export default function Cards({ onNext }: { onNext: () => void }) {
  return (
    <button onClick={onNext}>
      Cards Page
    </button>
  );
}