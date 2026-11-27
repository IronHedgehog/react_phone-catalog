import { ClipLoader } from 'react-spinners';

import s from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={s.loader} role="status" aria-label="Loading">
      <ClipLoader color="var(--accent-color)" size={48} />
    </div>
  );
};
