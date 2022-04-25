import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StationCard } from '@/components/common/settings/change-stations/StationCard';
import { StationDirectionModal } from '@/components/common/settings/change-stations/StationDirectionModal';
import { GRAY } from '@/context/style/colorTheme';

export type StationType = {
  stationLineName: string;
  stationName: string;
  stationDirection: string[];
};

// type ResponseStationType = {
//   staion_name: string,
//   station_name_k: string,
// };

export const ChangeStations = () => {
  let stationsList: StationType[] = [];

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const [stationName, setStationName] = useState<string>();
  const [selectedStationDir, setSelectedStationDir] = useState<string[]>([]);

  useEffect(() => {
    console.log(stationName);
    // TODO：APIを実行する
    axios
      .get('https://train-api-rails.herokuapp.com/search?name=' + stationName)
      .then((res) => {
        console.log('成功');
        console.log(res.data.data);
        stationsList = res.data.data;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // const responseData = res.data.data;
        // stationsList = responseData.map((data: ResponseStationType) => {
        //   const stationData = {
        //     stationName: {data.station_name},
        //     stationLineName: {data.station_name_k},
        //     StationDirection: [],
        //   };
        //   return stationData
        // });
      })
      .catch(() => {
        console.log('error');
      });
  }, [stationName]);

  return (
    <>
      <SearchField>
        <SearchIcon
          sx={{ fontSize: '30px', padding: '2px', marginLeft: '2vw' }}
        />
        <SearchInput
          placeholder="駅名を入力してください"
          type="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setStationName(e.target.value);
          }}
        />
      </SearchField>
      <StationCardList>
        {stationsList.map((data, index) => {
          return (
            <StationCard
              key={index}
              Station={data}
              onClickStation={() => {
                handleModalOpen();
                setSelectedStationDir(data.stationDirection);
              }}
            />
          );
        })}
      </StationCardList>
      <StationDirectionModal
        handleModalClose={handleModalClose}
        isModalOpen={open}
        selectedStationDir={selectedStationDir}
      />
    </>
  );
};

const SearchField = styled.div`
  width: 94vw;
  border-radius: 16px;
  background-color: ${GRAY};
  padding: 1px 0;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  backgroundcolor: ${GRAY};
  border: 0;
  padding: 10px;
  :focus {
    outline: 0ch;
  }
`;

const StationCardList = styled.div`
  text-align: center;
  border-top: 1px solid ${GRAY};
`;
