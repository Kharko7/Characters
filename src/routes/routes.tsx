import { Route, Routes } from 'react-router-dom';

import Characters from 'pages/characters/Characters';
import Profile from 'pages/profile/Profile';
import { RoutesPath } from './path';

const AppRouter = () => {

    return (
        <Routes>
            <Route path={RoutesPath.main} element={<Characters />}></Route>
            <Route path={RoutesPath.characterId} element={<Profile />}></Route>
        </Routes>
    );
};

export default AppRouter;