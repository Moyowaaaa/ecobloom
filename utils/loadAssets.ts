import usePreloadImagesStore from "~/stores/ImagesPreloader";
import logo from "~/assets/images/logo.svg";
import flowerSmall from "~/assets/images/flowerSmall.svg";
import X from "~/assets/images/X.png";
import linkedin from "~/assets/images/linkedin.png";
import Instagram from "~/assets/images/instagram.png";
import flowerBlack from "~/assets/images/flowerBlack.png";
import bigYellowFlower from "~/assets/images/bigYellowFlower.png";
import bigBlackFlower from "~/assets/images/bigBlackFlower.png";
import heroIcon from "~/assets/images/heroIcon.svg";
import gardenImage from "~/assets/images/gardenImage.png";
import landscaping from "~/assets/images/landscaping.png";
import maintenance from "~/assets/images/maintenance.png";
import eco from "~/assets/images/eco.png";
import testimonialsIcon from "~/assets/images/testimonialsIcon.svg";
import testimonialLeft from "~/assets/images/testimonialLeft.png";
import testimonialCenter from "~/assets/images/testimonialCenter.png";
import testimonialRight from "~/assets/images/testimonialRight.png";
import avatar1 from "~/assets/images/avatar1.png";
import avatar2 from "~/assets/images/avatar2.png";
import avatar3 from "~/assets/images/avatar3.png";
import avatar4 from "~/assets/images/avatar4.png";

export function loadAssets(): Promise<void[]> {
  const preloadImagesStore = usePreloadImagesStore();

  const images: string[] = [
    logo,
    flowerSmall,
    X,
    linkedin,
    Instagram,
    flowerBlack,
    bigYellowFlower,
    bigBlackFlower,
    heroIcon,
    gardenImage,
    maintenance,
    eco,
    landscaping,
    testimonialCenter,
    testimonialLeft,
    testimonialRight,
    testimonialsIcon,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
  ];

  preloadImagesStore.numberOfImagesToLoad = images.length;

  const promises: Promise<void>[] = [];

  images.forEach((imagePath) => {
    const promise = new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        preloadImagesStore.numberOfLoadedImages++;
        if (preloadImagesStore.numberOfLoadedImages === images.length) {
          preloadImagesStore.imagesHaveLoaded = true;
        }
        resolve();
      };
      image.onerror = () => {
        reject(`Failed to load image: ${imagePath}`);
      };
      image.src = imagePath;
    });
    promises.push(promise);
  });

  return Promise.all(promises);
}
