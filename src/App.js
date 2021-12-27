import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import FormService from "./components/FormService/FormService";
import "./index.css";

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

    addService = (e) => {
        e.preventDefault();
        console.log("click");
        console.log(e.target);

        const newJob = {
            id: Math.floor(Math.random() * 10),
            date: e.target[0].value,
            job: e.target[1].value,
            location: e.target[2].value,
            telephone: e.target[3].value,
            presureLow: e.target[4].value,
            presureHigh: e.target[5].value,
            tempIn: e.target[6].value,
            tempOut: e.target[7].value,
            tempDelta: e.target[8].value,
        };

        console.log(newJob);

        this.setState((prevState) => ({
            services: [...prevState.services, newJob],
        }));
    };

    render() {
        return (
            <>
                <ListWrapper services={this.state.services} />
                <FormService submitFn={this.addService} />
            </>
        );
    }
}

export default App;
