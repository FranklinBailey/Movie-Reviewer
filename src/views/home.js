import { Card } from "react-bootstrap";
import React from "react";
// import { useState, useEffect } from "react";



export default function Home() {

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
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const cardFooter = {
        position: "relative",
        top: "160px"
    }

    return (
        <div>
            <h1 className='homeH1' style={h1Style}>
                Welcome to TheMovieDB
            </h1>
            <br/>
            <h1 className="homeH1" style={h1Style}>
            Movie Reviewer!
            </h1>
            <div style={containerStyle}>
                <Card className='discoverLink' style={cardStyle}>
                    <Card.Footer className='discoverLink' style={cardFooter}>
                        Discover
                    </Card.Footer>
                </Card>
                <Card className='topRatedLink' style={cardStyle}>
                <Card.Footer className='topRatedLink' style={cardFooter}>
                        Top Rated
                    </Card.Footer>
                </Card>
                <Card className='upcomingLink' style={cardStyle}>
                <Card.Footer className='upcomingLink' style={cardFooter}>
                        Upcoming
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}