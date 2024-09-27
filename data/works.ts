import type { work } from "~/types/declarations";
import showcase1Image from "../assets/images/showcase1.webp";
import showcase2Image from "../assets/images/showcase2.webp";
import showcase3Image from "../assets/images/showcase3.webp";
import showcase4Image from "../assets/images/showcase4.webp";
import showcase5Image from "../assets/images/showcase5.webp";
import testimonialIcon from "../assets/images/testimonialsIcon.svg";
import flowerHatIcon from "../assets/images/flowerHat.svg";
import styledFlower from "../assets/images/styledFlower.svg";
import schoolFlower from "../assets/images/schoolFlower.svg";

export const works: work[] = [
  {
    image: showcase1Image,
    location: "NY",
    title: "Backyard Oasis",
    icon: testimonialIcon,
  },
  {
    image: showcase2Image,
    location: "Ohio",
    title: "Styled Backyard",
    icon: styledFlower,
  },
  {
    image: showcase3Image,
    location: "NY",
    title: "Community Gardens",
    icon: flowerHatIcon,
  },
  {
    image: showcase4Image,
    location: "Ohio",
    title: "School Gardens",
    icon: schoolFlower,
  },
  {
    image: showcase5Image,
    location: "Arizona",
    title: "Community Gardens",
    icon: flowerHatIcon,
  },
];
