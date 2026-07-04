"use client";

import { useState } from "react";

import Welcome from "../components/welcome/Welcome";
import Envelope from "../components/envelope/Envelope";
import Cake from "../components/cake/Cake";
import Wish from "../components/wish/Wish";
import Music from "../components/music/Music";
import Cards from "../components/cards/Cards";
import FinalLetter from "../components/final-letter/FinalLetter";

export default function Home() {
  const [page, setPage] = useState(0);

  switch (page) {
    case 0:
      return <Welcome onNext={() => setPage(1)} />;

    case 1:
      return <Envelope onNext={() => setPage(2)} />;

    case 2:
      return <Cake onNext={() => setPage(3)} />;

    case 3:
      return <Wish onNext={() => setPage(4)} />;

    case 4:
      return <Music onNext={() => setPage(5)} />;

    case 5:
      return <Cards onNext={() => setPage(6)} />;

    default:
      return <FinalLetter />;
  }
}