import { RouteProps } from 'react-router-dom';
import Home from '../containers/home';
import Combustivel from '../containers/combustivel';
import Register from '../containers/register';
import Cache from '../containers/cache';
import Eleicoes from '../containers/eleicoes';
import StarWarsDetails from '../containers/star-wars-details';
import StarWars from '../containers/star-wars';


const publicUrl = process.env.PUBLIC_URL;


interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
    { path: `${publicUrl}/`, component: Home, exact: true },
    { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
    { path: `${publicUrl}/combustivel`, name: 'Combustivel', component: Combustivel, exact: true },
    { path: `${publicUrl}/register`, name: 'Register', component: Register, exact: true },
    { path: `${publicUrl}/cache`, name: 'Cache',  exact: true, component: Cache },
    { path: `${publicUrl}/eleicoes`, name: 'Eleições', component: Eleicoes, exact: true },
    { path: `${publicUrl}/star-wars/:id`, component: StarWarsDetails },
    { path: `${publicUrl}/star-wars/`, name: 'Star Wars', component: StarWars, exact: true },
  ];

