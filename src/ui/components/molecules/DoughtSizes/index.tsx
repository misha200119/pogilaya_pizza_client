import React, { memo, FC, Dispatch } from 'react';
import { DoughSize } from '../../../../utils/types/pizza';

interface Props {
  currentSize: DoughSize;
  setCurrentSize: Dispatch<React.SetStateAction<DoughSize>>;
  sizes: Array<DoughSize>;
}

const DoughtSizes: FC<Props> = memo(() => {
  return (
    <div>DoughtSizes</div>
  );
});

export default DoughtSizes;
