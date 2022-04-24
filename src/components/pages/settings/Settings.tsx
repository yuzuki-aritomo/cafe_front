import styled from "styled-components";
import {SettingListItem} from "@/components/common/settings/SettingListItem";
import { GRAY, WHITE } from "@/context/style/colorTheme";

export const Settings = () => {
  return (
    <SettingContainer>
      <SettingListItemsWrapper>
        <SettingListItem settingName="駅を変更" />
        <SettingListItem isLastChild settingName="パスワードを変更" />
      </SettingListItemsWrapper>
      <SettingListItemsWrapper>
        <SettingListItem settingName="利用規約" />
        <SettingListItem settingName="プライバシーポリシー" />
        <SettingListItem isLastChild settingName="お問い合わせ" />
      </SettingListItemsWrapper>
      <SettingListItemsWrapper>
        <SettingListItem isLastChild settingName="ログアウト" />
      </SettingListItemsWrapper>
    </SettingContainer>
  );
};

const SettingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${GRAY};
`;

const SettingListItemsWrapper = styled.div`
  width: 100%;
  font-weight: 700;
  background-color: ${WHITE};
  padding: 10px 0;
  margin: 0 0 20px 0;
`;