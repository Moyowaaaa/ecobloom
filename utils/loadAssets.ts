import usePreloadImagesStore from "~/stores/ImagesPreloader";
import helpingHandImage from "./assets/images/helpinghand.png";
import zebraAppBaseImage from "~/assets/images/zebra.png";
import FrothFusionFullImage from "~/assets/images/FrothFull.png";
import FrothFusionCutImage from "~/assets/images/frothCut.png";
import TintBoldFullImage from "~/assets/images/tintboltFull.png";
import TintBoldCutImage from "~/assets/images/tintboltCut.png";
import ElearningFullImage from "~/assets/images/elearningFull.png";
import ElearningCutImage from "~/assets/images/elearningCut.png";
import zebraBannerImage from "~/assets/images/zebraBannerImage.png";
import zebraSplashImage from "~/assets/images/Splash.png";
import zebraTypoShowcaseImage from "~/assets/images/zebraShowcase.png";
import zebraDesignImage1 from "~/assets/images/zebraDesignImage1.png";
import zebraDesignImage2 from "~/assets/images/zebraDesignImage2.png";
import zebraDesignImage3 from "~/assets/images/zebraDesignImage3.png";
import zebraDesignImage4 from "~/assets/images/zebraDesignImage4.png";
import zebraDesignImage5 from "~/assets/images/zebraDesignImage5.png";
import zebraDesignImage6 from "~/assets/images/zebraDesignImage6.png";

export function loadAssets(): Promise<void[]> {
  const preloadImagesStore = usePreloadImagesStore();

  const images = [
    helpingHandImage,
    ElearningCutImage,
    ElearningFullImage,
    TintBoldCutImage,
    FrothFusionFullImage,
    FrothFusionCutImage,
    zebraAppBaseImage,
    zebraBannerImage,
    zebraDesignImage1,
    zebraDesignImage2,
    zebraDesignImage3,
    zebraDesignImage4,
    zebraDesignImage5,
    zebraDesignImage6,
    TintBoldFullImage,
    zebraSplashImage,
    zebraTypoShowcaseImage,
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
