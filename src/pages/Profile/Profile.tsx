import { getAccessToken, redirectToAuthCodeFlow } from "../../utils/authCodeWithPkce";
import React, { useEffect, useState } from "react";
import "./Profile.css";
import Track from "../../components/Track/Track";
import Artist from "../../components/Artist/Artist";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const clientId = "be9c648239c9405e8e9c4a025f3438cb";

const Profile = () => {

    const [profile, setProfile] = useState<any>();
    const [topTracks, setTopTracks] = useState<any>();
    const [topArtists, setTopArtists] = useState<any>();
    const [playlists, setPlaylists] = useState<any>();

    useEffect(() => {
        if (code) {
            const token = getAccessToken(clientId, code).then((token) => {
        
                fetch("https://api.spotify.com/v1/me", {
                    method: "GET", headers: { Authorization: `Bearer ${token}` 
                }
                }).then((response) => {
                    if (response.status !== 401) {
                        response.json().then((data) => {
                            setProfile(data);
                        });
                    }
                });
        
                fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50", {
                    method: "GET", headers: { Authorization: `Bearer ${token}` }
                }).then((response) => {
                    if (response.status !== 401) {
                        response.json().then((data) => {
                            data.items.forEach((track: any) => {
                                track.number = data.items.indexOf(track) + 1;
                                if (track.name.length > 13) {
                                    track.name = track.name.substring(0, 13) + "...";
                                }
                            });
                            setTopTracks(data);
                        });
                    }
                });
        
                fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50", {
                    method: "GET", headers: { Authorization: `Bearer ${token}` }
                }).then((response) => {
                    if (response.status !== 401) {
                        response.json().then((data) => {
                            data.items.forEach((artist: any) => {
                                artist.number = data.items.indexOf(artist) + 1;
                                if (artist.name.length > 13) {
                                    artist.name = artist.name.substring(0, 13) + "...";
                                }
                            });
                            setTopArtists(data);
                        });
                    }
                });
        
                fetch("https://api.spotify.com/v1/me/playlists", {
                    method: "GET", headers: { Authorization: `Bearer ${token}` }
                }).then((response) => {
                    if (response.status !== 401) {
                        response.json().then((data) => {
                            data.items.forEach((playlist: any) => {
                                playlist.number = data.items.indexOf(playlist) + 1;
                                if (playlist.name.length > 13) {
                                    playlist.name = playlist.name.substring(0, 13) + "...";
                                }
                            });
                            setPlaylists(data);
                        });
                    }
                });
            });
        } else {
            console.log("No code");
        }
    }, [code]);

    return (
        <div className={'profile'}>

            <a id="link-profile" href={profile?.external_urls?.spotify}>
                <section id="profile">
                    <img id="avatar" src={profile?.images[0]?.url} alt="avatar" />
                    <div id="background">
                        <h1 id="username"><span id="displayName">{profile?.display_name}</span></h1>
                        <p id="id">ID : {profile?.id}<span id="id"></span></p>
                    </div>
                </section>
            </a>

            <section id="top-tracks" className="section-content">
                <h2 className="subtitle">Top tracks</h2>
                <div id="tracks">
                    {topTracks?.items.map((track: any) => (
                        <Track
                            title={track?.name}
                            number={track?.number}
                            imgLink={track?.album?.images[0]?.url}
                            spotifyLink={track?.external_urls?.spotify}
                        />
                    ))}
                </div>
            </section>

            <section id="top-artists" className="section-content">
                <h2 className="subtitle">Top artists</h2>
                <div id="artists">
                    {topArtists?.items.map((artist: any) => (
                        <Artist
                            name={artist?.name}
                            number={artist?.number}
                            imgLink={artist?.images[0]?.url}
                            spotifyLink={artist?.external_urls?.spotify}
                        />
                    ))}
                </div>
            </section>

            <section id="top-playlists" className="section-content">
                <h2 className="subtitle">Your publics playlists</h2>
                <div id="playlists">
                    {playlists?.items.map((playlist: any) => (
                        <Track
                            title={playlist?.name}
                            number={playlist?.number}
                            imgLink={playlist?.images[0]?.url}
                            spotifyLink={playlist?.external_urls?.spotify}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Profile;