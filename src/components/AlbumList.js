import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';




class AlbumList extends Component {

    state = {
        albums: []
    }

    componentDidMount() {
       axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((res) => this.setState({albums: res.data}));
    }

    renderAlbums = () => {
       const albumsNodes =  this.state.albums.map((album,id) => 
       <AlbumDetail key={id}
        album={album}
        />);
       return albumsNodes;
    }

    render() {

        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}
   


export default AlbumList;