import styled, { css } from 'styled-components';
import { IoCalendarSharp, IoLocationSharp, IoSearch } from 'react-icons/io5';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary_light};
  width: 100%;
  max-width: 54rem;
  padding: 0.4rem 0.4rem 0.4rem 2.4rem;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 916px) {
    max-width: 100%;
    padding: 1.6rem 0.8rem;
    border-radius: 0;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`;

const datePickerCustomCSS = css`
  .react-datepicker__header {
    background: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__current-month {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text_50};
  }

  .react-datepicker__navigation-icon::before {
    height: 9px;
    border-width: 2px 2px 0 0;
    border-color: ${({ theme }) => theme.colors.text_50};
    top: 2px;
  }

  .react-datepicker__day-name {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text_50};
  }

  .react-datepicker__day {
    font-size: 1rem;
  }

  .react-datepicker__day--keyboard-selected {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  ${datePickerCustomCSS};

  @media (max-width: 916px) {
    margin-top: 1rem;
  }
`;

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.colors.text_600};

  @media (max-width: 916px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const LocationIcon = styled(IoLocationSharp)`
  ${iconCSS}
`;

export const CalendarInputs = styled.div`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 916px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CalendarIcon = styled(IoCalendarSharp)`
  ${iconCSS}
`;

export const Input = styled.input`
  background: transparent;
  width: 100%;
  margin-left: 0.6rem;
  border: none;

  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_600};

  &[type='date']::-webkit-inner-spin-button,
  &[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  @media (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

export const SearchButton = styled.button`
  background: ${({ theme }) => theme.colors.background_light};
  width: 3rem;
  height: 3rem;

  border-radius: 50%;
  border: none;
  box-shadow: 0px 3px 15px #0000001a;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 916px) {
    width: 4.8rem;
    height: 4.8rem;

    position: fixed;
    bottom: 11rem;
    right: 0.8rem;
  }
`;

export const SearchIcon = styled(IoSearch)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 916px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
