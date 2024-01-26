// Переработать приложение, сделанное в задании третьего урока "Крестики-Нолики":
// использовать пакет "redux" для управления состоянием приложения;
// не использовать пакет "react-redux" и другие какие-либо вспомогательные пакеты;
// не использовать React Context и хук useReducer();
// придумать, как запускать рендер компонентов после обновления состояния в Redux store;
// соблюдать 3 принципа Redux;

import { useDispatch } from "../reduxManager";
import GameLayout from "./gameLayout";
import { RESTART_GAME } from "../actions";

export const Game = () => {
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(RESTART_GAME);
    };

    return <GameLayout handleRestart={handleRestart} />;
};
