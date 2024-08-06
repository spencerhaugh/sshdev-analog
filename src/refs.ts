import { NavbarLink } from "./models/nav.model";

export const RESUME_LINK = "https://drive.google.com/file/d/1lGJtliCnaQ1i37dCHmfPrTKDhbGN_pir/view?usp=sharing";
export const BASE_DATA_URL="https://portfolio-server-production-c31f.up.railway.app";

export const links: NavbarLink[] = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/projects',
        label: 'Projects'
    },
    {
        path: '/contact',
        label: 'Contact'
    }
];
