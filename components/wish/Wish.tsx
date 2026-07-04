"use client";

export default function Wish({ onNext }: { onNext: () => void }) {
  return (
    <button onClick={onNext}>
      Wish Page
    </button>
  );
}