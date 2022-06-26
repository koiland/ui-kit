import React from 'react';

/* @Types */
import { IMonogramProps } from './Monogram.types';

/* @Styled Components */
import { MonogramStyled } from './Monogram.styled';

export const Monogram = ({ size = 'sm', appearance = 'blue', initials }: IMonogramProps): JSX.Element => {
  const _initials = React.useMemo(
    () =>
      initials
        .split(' ')
        .slice(0, 2)
        .reduce((acc = '', item = '') => acc + item[0], ''),
    [initials]
  );

  return <MonogramStyled size={size} appearance={appearance} initials={_initials} />;
};
