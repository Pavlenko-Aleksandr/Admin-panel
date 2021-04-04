import React from 'react';
import { useAlbums } from '../../hooks/useAlbums';
import Album from '../Album/Album';

export default function Contacts() {
    const { albums } =  useAlbums();
        
    return (
        <>
            <h1>Albums List</h1>
            <ul>
            {albums.map((album) => (
                <Album
                    key={album.id}
                    album={album}
                />))}
            </ul>
        </>
        
    );
    
}
