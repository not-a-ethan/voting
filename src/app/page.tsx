import Chart from 'chart.js/auto';

import { headers } from 'next/headers';
import Script from 'next/script'

export default async function Page() {
    const headerList = headers();
    const domainName = (await headerList).get('host');

    const response = await fetch(`http://${domainName}/voting/result`, {
        method: "GET"
    });

    const body = JSON.parse(await response.json());
    
    return (
        <div>
            <h1>What is better? Hotdogs or Hamburgers</h1>

            <div>
                <p>Hambuger votes: {await body["hamburger"]} ({await body["hamburger percent"]}%)</p>
                <p>Hotdog votes: {await body["hotdog"]} ({await body["hotdog percent"]}%)</p>
            </div>

            <canvas id="myChart"></canvas> 

            <script>
                const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
                const yValues = [55, 49, 44, 24, 15];
                const barColors = [
                    "#b91d47",
                    "#00aba9",
                    "#2b5797",
                    "#e8c3b9",
                    "#1e7145"
                ];

                new Chart("myChart", {
                    type: "pie",
                    data: {
                        labels: xValues,
                        datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                        }]
                    },
                    options: {
                        title: {
                        display: true,
                        text: "World Wide Wine Production"
                        }
                    }
                });
            </script>
        </div>
    )
}