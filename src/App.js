import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";

const InitialDefaultServices = [
    {
        id: 1,
        date: "December 17, 1995 03:24:00",
        job: "repair",
        location: "3.02",
        telephone: "8351",
        presureLow: "2.1",
        presureHigh: "12.0",
        tempIn: "26.3",
        tempOut: "36.2",
        tempDelta: "13",
    },
    {
        id: 2,
        date: "December 11, 2015 13:54:40",
        job: "service",
        location: "5.11",
        telephone: "8471",
        presureLow: "2.3",
        presureHigh: "11.0",
        tempIn: "24.2",
        tempOut: "34.1",
        tempDelta: "12",
    },
];

class App extends React.Component {
    state = {
        services: [...InitialDefaultServices],
    };

    render() {
        return (
            <>
                <ListWrapper services={this.state.services} />
            </>
        );
    }
}

export default App;
