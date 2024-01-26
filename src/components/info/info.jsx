import { useReduxState } from "../../reduxManager";
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from "../../constants";
import InfoLayout from "./infoLayout";

export const Info = () => {
    const { status, currentPlayer } = useReduxState();

    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAYER_NAME[currentPlayer];
    const information =
        status === STATUS.DRAW ? "Ничья" : `${playerAction} ${playerName}`;

    return <InfoLayout information={information} />;
};
