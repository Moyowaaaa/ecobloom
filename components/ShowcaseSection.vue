<template>
  <div class="showcaseSection">
    <div class="showcaseSection__projects-section">
      <div class="showcaseSection__projects-section--title-container">
        <div class="showcaseSection__projects-section--title-container__title">
          <h1>What We Actually Do</h1>
          <p>
            Creating Beautiful, Sustainable Gardens Tailored to Your Vision,
            we’ll help bring your Gardens to life
          </p>
        </div>

        <div class="button">
          <p>Get a Quote Now</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <g clip-path="url(#clip0_4_1703)">
              <path
                d="M8.86191 6.13197C9.16922 5.37107 8.60711 4.37567 8.01491 3.74777C8.24451 2.91477 8.27461 1.77237 7.64671 1.24527C7.01882 0.717468 5.89881 0.944268 5.11761 1.31387C4.39661 0.837868 3.32001 0.455668 2.62351 0.889668C1.92771 1.32367 1.79751 2.45977 1.90741 3.31657C1.23261 3.85487 0.536115 4.76137 0.734215 5.55727C0.932315 6.35317 1.97181 6.82847 2.82021 6.98807C3.12401 7.79657 3.77081 8.73877 4.58911 8.79687C5.16872 8.83747 5.72311 8.42517 6.14591 7.91277C6.99991 8.97677 7.60331 10.1017 7.93441 11.207C7.42832 10.451 6.38041 9.79997 4.19991 9.79997C4.19991 12.7085 6.32932 13.3021 7.69991 13.3021L9.93991 13.3035C9.93991 11.3974 9.24971 9.16647 7.63691 7.07277C8.18501 6.89987 8.67221 6.59887 8.86191 6.13197ZM5.79801 5.97797C5.60713 6.09706 5.39466 6.17738 5.17274 6.21436C4.95081 6.25134 4.72377 6.24424 4.50459 6.19347C4.28541 6.14271 4.07837 6.04927 3.8953 5.91849C3.71222 5.78771 3.5567 5.62215 3.43761 5.43127C3.31853 5.24039 3.2382 5.02792 3.20122 4.80599C3.16425 4.58406 3.17134 4.35703 3.22211 4.13784C3.27288 3.91866 3.36632 3.71162 3.4971 3.52855C3.62787 3.34548 3.79343 3.18996 3.98431 3.07087C4.36982 2.83045 4.83504 2.75302 5.27764 2.85561C5.72023 2.9582 6.10395 3.23241 6.34437 3.61792C6.58478 4.00342 6.66221 4.46865 6.55962 4.91124C6.45703 5.35384 6.18282 5.73755 5.79731 5.97797H5.79801ZM9.81392 8.57357C10.572 10.0926 10.9822 11.6907 10.9885 13.2671C13.2971 11.6074 13.2999 8.54417 13.2999 5.60207C13.2999 5.60207 10.7309 6.32587 9.81392 8.57357Z"
                fill="#16270C"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_1703">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div class="showcaseSection__projects-section--projects-showcase">
        <ShowcaseCard />

        <!-- <div class="showcaseCard"></div>

        <div class="showcaseCard"></div>

        <div class="showcaseCard"></div>
        <div class="showcaseCard"></div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.showcaseSection {
  width: 100%;
  padding: 0 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__projects-section {
    display: flex;
    flex-direction: column;
    gap: 4.938rem;
    position: relative;

    &--title-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__title {
        display: flex;
        flex-direction: column;
        gap: 0.688rem;

        h1 {
          color: #333;

          font-size: 2.716rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        p {
          font-size: 1.125rem;
          color: #16270c;

          font-style: normal;
          font-weight: 450;
          line-height: normal;
          max-width: 42rem;
        }
      }
    }

    &--projects-showcase {
      width: 100%;
      position: absolute;
      top: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .showcaseCard {
        width: 100%;
        height: 35.688rem;
        border-radius: 21.571px;
        background: #16270c;
        position: absolute;
        z-index: 5;

        &:nth-child(2) {
          margin-top: 1.25rem;
          width: 99%;
          background-color: #fff83c;
          z-index: 4;
        }
        &:nth-child(3) {
          margin-top: 2.5rem;
          width: 98%;
          background-color: #3d4c0a;
          z-index: 3;
        }
        &:nth-child(4) {
          margin-top: 3.75rem;
          width: 97%;
          background-color: #5c2d4e;
          z-index: 2;
        }
      }
    }
  }
}
</style>
