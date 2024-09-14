import About from "../pages/About";
import Contacts from "../pages/Contacts";
import MainPage from "../pages/MainPage";
import Randomizer from "../pages/Randomizer";

export const routes = [
    {path: '/main', component: MainPage},
    {path: '/random', component: Randomizer},
    {path: '/about', component: About},
    {path: '/contacts', component: Contacts},
];