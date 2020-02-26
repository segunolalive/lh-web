import { 
    HomePage, NotFound 
} from "./components/views";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes;
