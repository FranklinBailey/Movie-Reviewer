import { Card } from "react-bootstrap";
// import { useState, useEffect } from "react";



export default function Home() {
    const cardStyle = {
        width: "300px", // Adjust the width of the cards as needed
        height: "300px",
        border: 'solid black 3px',
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '10%',
        paddingLeft: '20%',
        paddingRight: '20%' // Optional padding between cards
    };

    return (
        <div style={containerStyle}>
            <Card style={cardStyle}>
                {/* Content for Card 1 */}
            </Card>
            <Card style={cardStyle}>
                {/* Content for Card 2 */}
            </Card>
            <Card style={cardStyle}>
                {/* Content for Card 3 */}
            </Card>
        </div>
    );
}