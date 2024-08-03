import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button,ScrollView } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export default class Charts extends Component {
   
    render(props) {
        const chartConfig = {
            backgroundGradientFrom: "white",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "white",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };
          const data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(15, 10, 192, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
            legend: ["Rainy Days"] // optional
          };
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
               <View style={{flex:1,flexDirection:'column',justifyContent:'center',marginTop:30}}>
               <ScrollView>
                <Text>Charts</Text>
                {/* <Button
                    title="Sidebar"
                    onPress={() => navigation.openDrawer()}
                ></Button> */}
                <LineChart
                    data={data}
                    width={screenWidth-20}
                    height={220}
                    chartConfig={chartConfig}
                  />
                <BarChart
                   data={data}
                   width={screenWidth-50}
                   height={220}
                   yAxisLabel="$"
                   chartConfig={chartConfig}
                   verticalLabelRotation={30}
                 />
                 <LineChart
                    data={data}
                    width={screenWidth-20}
                    height={220}
                    chartConfig={chartConfig}
                  />
                <BarChart
                   data={data}
                   width={screenWidth-50}
                   height={220}
                   yAxisLabel="$"
                   chartConfig={chartConfig}
                   verticalLabelRotation={30}
                 />
                </ScrollView>
               </View>
            </View>
        );
    }
}
const styles = {
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
}
