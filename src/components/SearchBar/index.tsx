import * as S from './styles';

export const SearchBar: React.FC = () => {
  return (
    <S.Container>
      <S.InputWrapper htmlFor="location">
        <S.LocationIcon />
        <S.Input type="text" id="location" defaultValue="North Carolina" />
      </S.InputWrapper>

      <S.CalendarInputs>
        <S.InputWrapper htmlFor="dateStart">
          <S.CalendarIcon />
          <S.Input type="date" defaultValue="2022-01-01" />
        </S.InputWrapper>

        <S.InputWrapper htmlFor="dateEnd">
          <S.CalendarIcon />
          <S.Input type="date" defaultValue="2022-10-01" />
        </S.InputWrapper>
      </S.CalendarInputs>

      <S.SearchButton type="button" name="search">
        <S.SearchIcon />
      </S.SearchButton>
    </S.Container>
  );
};
