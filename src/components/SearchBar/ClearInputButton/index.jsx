import React from 'react';
import { Container, AnimatedView } from './styles';
import { ClearIcon } from './ClearIcon';
import { ENTER, EXIT } from '../../../animations';

const ClearInputButton = ({ onPress, extraStyle }) => {
  return (
    <Container onPress={onPress} style={extraStyle}>
      <AnimatedView entering={ENTER.FadeIn} exiting={EXIT.FadeOut}>
        <ClearIcon />
      </AnimatedView>
    </Container>
  );
};

export default ClearInputButton;
