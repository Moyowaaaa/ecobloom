export type work = {
  title: string;
  location: string;
  image: string;
  icon: string;
};

export type showcase = {
  background: string;
  text: {
    headerColor?: string;
    descColor?: string;
  };
  timerIndex: number;
  title: string;
  desc: string;
  image: string;
};
