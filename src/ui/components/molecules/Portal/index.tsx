import { FC, memo, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { PortalContainersIDs } from '../../../../utils/constants/portalContainersIDs';

interface Props {
  mountTo: PortalContainersIDs;
  children: ReactNode;
}
export const Portal: FC<Props> = memo(({ mountTo, children }) => {
  const container = document.getElementById(mountTo);

  if (container) {
    return ReactDOM.createPortal(children, container);
  }

  throw Error('Contaniner to mount not found');
});
