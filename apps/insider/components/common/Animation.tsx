import { VFC } from 'react';
import Lottie from 'react-lottie';

type Props = {
  name: string;
};

export const Animation: VFC<Props> = ({ name }) => {
  return (
    <Lottie
      options={{
        animationData: require(`../../public/lottie/${name}.json`),
      }}
      height={100}
      width={100}
    />
  );
};
