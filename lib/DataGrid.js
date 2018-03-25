import * as React from "react";
import {Text, View} from "react-native";
import {generateColumns} from "./util/util";
import Header from "./Header";

const mockData = [
    {name: "Shubhang", id: 2, city: "BLR",age:25},
    {name: "T", id: 1, city: "HYD",age:21}
]

class DataGrid extends React.Component {
    render() {
        return (<Header cols={generateColumns(mockData)}/>)
    }
}

export {DataGrid}