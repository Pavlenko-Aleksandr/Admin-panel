import { useEffect, useState } from "react";
import Axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/albums/';


export function useAlbums() {
    const [albums, setAlbums] = useState([])

    useEffect (() => {
        Axios.get(URL).then(({data}) => setAlbums(data));
    }, []);


    return {
        albums
    }
}