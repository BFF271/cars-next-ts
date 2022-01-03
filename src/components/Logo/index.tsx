import * as S from './styles';

export const Logo: React.FC = () => {
  return (
    <S.Container href="/">
      <S.Logo>
        <S.HighlightedText>Exotic</S.HighlightedText> Cars
      </S.Logo>
    </S.Container>
  );
};
