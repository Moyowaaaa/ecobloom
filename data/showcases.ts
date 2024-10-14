import type { showcase } from "~/types/declarations";
import gardenImage from "~/assets/images/gardenImage.png";
import landscaping from "~/assets/images/landscaping.png";
import maintenance from "~/assets/images/maintenance.png";
import eco from "~/assets/images/eco.png";

export const showcases: showcase[] = [
  {
    background: "#16270C",
    text: { headerColor: "#EFE93F", descColor: "white" },
    desc: "Custom garden designs that blend aesthetics with sustainability. Our expert designers work with you to create a personalized plan that suits your vision and lifestyle.",
    title: "Garden Design",
    image: gardenImage,
    timerIndex: 1,
  },
  {
    background: "#FFF83C",
    text: { headerColor: "#16270C", descColor: "#121212" },
    desc: "Transforming outdoor spaces with innovative landscaping solutions. From hardscaping to softscaping, we ensure every element is harmonious and eco-friendly",
    title: "Landscaping",
    image: landscaping,
    timerIndex: 2,
  },
  {
    background: "#3D4C0A",
    text: { headerColor: "#EFE93F", descColor: "white" },
    desc: "Regular garden maintenance to keep your space thriving year-round. Our team provides pruning, fertilizing, pest control, and more, using environmentally safe methods.",
    title: "Maintenance",
    image: maintenance,
    timerIndex: 3,
  },
  {
    background: "#5C2D4E",
    text: { headerColor: "#EFE93F", descColor: "white" },
    desc: "Implementing sustainable practices to reduce your environmental footprint. We use organic materials, water-saving techniques, and native plants to create resilient gardens.",
    title: "Eco-Friendly Solutions",
    image: eco,
    timerIndex: 3,
  },
];
