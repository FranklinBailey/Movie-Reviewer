import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useReducer } from "react";
import { useState, useEffect } from "react";



export default function Home() {

    const [movies, setMovies] = useState(null);

    const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en";
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE",
        },
    };

    // REQUEST DATA FROM THE API
    useEffect(() => {
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => setMovies(json));
    }, []);

    // LINKS URL WITH EACH INDIVIDUAL MOVIE IMAGE TO DISPLAY ON WEBPAGE
    const getImageUrl = (posterPath) => {
        const baseImageUrl = 'https://image.tmbd.org/t/p/w500';
        return baseImageUrl + posterPath;
    };

    // CSS FOR CARDS

    const h1Style = {
        display: 'flex',
        justifyContent: 'center',
        // paddingTop: '5%'
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '20%',
        paddingRight: '20%',
        paddingTop: '3%'
    };

    const cardStyle = {
        width: "300px",
        height: "300px",
        border: 'solid black 3px',
        backgroundColor: "paleVioletRed",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const cardFooter = {
        position: "relative",
        top: "15px"
    }

    const linkStyle = {
        width: "300px",
        height: "300px",
        // border: 'solid black 3px',
        // backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div>
            <h1 className='homeH1' style={h1Style}>
                Welcome to TheMovieDB
            </h1>
            <br />
            <h1 className="homeH1" style={h1Style}>
                Movie Reviewer!
            </h1>
            <div>
                {movies ? (
                    // CREATES A CARD FOR EACH MOVIE IMAGE
                    movies.results.length > 0 && (
                        <div style={containerStyle} key={movies.results[0].id}>

                            <Card className='discoverLink' style={cardStyle} >
                                <Nav>
                                    <Nav.Item>
                                        <Link to={`/discover?data=${movies.results[0].id}`}
                                            className="discoverLink"
                                            style={linkStyle}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={getImageUrl(movies.results[0].posterPath)}
                                                alt="Movie Poster"
                                                style={{}}
                                            />
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                                <Card.Footer className='discoverLink' style={cardFooter}>
                                    Discover
                                </Card.Footer>
                            </Card>
                            <Card className='topRatedLink' style={cardStyle}>
                                <Nav>
                                    <Nav.Item>
                                        <Link to={`/topRated?data=${movies.results[0].id}`}
                                            className="topRatedLink"
                                            style={linkStyle}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={getImageUrl(movies.results[0].posterPath)}
                                                alt="Movie Poster"
                                                style={{}}
                                            />
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                                <Card.Footer className='topRatedLink' style={cardFooter}>
                                    Top Rated
                                </Card.Footer>
                            </Card>
                            <Card className='upcomingLink' style={cardStyle}>
                                <Nav>
                                    <Nav.Item>
                                        <Link to={`/upcoming?data=${movies.results[0].id}`}
                                            className="upcomingLink"
                                            style={linkStyle}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={getImageUrl(movies.results[0].posterPath)}
                                                alt="Movie Poster"
                                                style={{}}
                                            />
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                                <Card.Footer className='upcomingLink' style={cardFooter}>
                                    Upcoming
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                ) : (
                    "loading. . . . ."

                )}
            </div>
        </div >
    );
}