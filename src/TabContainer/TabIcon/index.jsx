import React from 'react';
import { TabIconContainer, TabLabel } from './styles';
import SvgMapper from '../../components/common/Icons/SvgMapper';

const TabIcon = ({ active, name }) => {
  const Icon = SvgMapper[name];
  const capitalizeFirstLetter = label => {
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  return (
    <TabIconContainer>
      <Icon isActive={active} />
      <TabLabel active={active}>{capitalizeFirstLetter(name)}</TabLabel>
    </TabIconContainer>
  );
};

export default React.memo(TabIcon);
