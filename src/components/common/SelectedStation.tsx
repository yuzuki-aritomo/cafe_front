import styled from 'styled-components';
import { BLUE } from '@/context/style/colorTheme';

export const SelectedStation = () => {
  return (
    <SelectedStationAround>
      <SelectedStationName>京都駅</SelectedStationName>
      <SelectedStationRouteName>JR京都線</SelectedStationRouteName>
    </SelectedStationAround>
  );
};

const SelectedStationAround = styled.div`
  width: 39%;
  height: 94px;
  border: 7px solid;
  border-color: ${BLUE};
  border-radius: 24px;
  margin: 0 auto;
`;
const SelectedStationName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin: 20px 0 auto auto;
`;
const SelectedStationRouteName = styled.p`
  color: ${BLUE};
  text-align: center;
  margin: 0 auto;
`;