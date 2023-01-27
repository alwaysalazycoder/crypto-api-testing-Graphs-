import React from 'react'
import { Line } from "react-chartjs-2"
import { Box } from '@chakra-ui/react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"


ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)
const Chart = ({ arr = [], currency, days }) => {

    const prices = [];
    const dates = []

    for (let i = 0; i < arr.length; i++) {
        if(days === "24h"){
            dates.push(new Date(arr[i][0]).toLocaleTimeString());
        }
        else{
            dates.push(new Date(arr[i][0]).toLocaleDateString());
        }
        
        prices.push(arr[i][1]);
    }
    const data = {
        labels: dates,
        datasets: [{
            label: `Prices in ${currency}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.4)",
        }]
    }
    return (
        <>
            <Box padding={"40px"}  marginTop={"30px"} >

                <Line 
                
                    options={{
                        responsive: true,
                    }}

                    data={data}
                />


            </Box>
        </>
    )
}

export default Chart    