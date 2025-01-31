import { headers } from 'next/headers';

export default async function Page() {
    const headerList = headers();
    const domainName = (await headerList).get('host');

    const response = await fetch(`http://${domainName}/voting/result`, {
        method: "GET"
    });

    const body = JSON.parse(await response.json());

    const ham = await body['hamburger'];
    const hamPercent = await body["hamburger percent"] + "%";
    const hot = await body['hamburger'];
    const hotPercent = await body["hamburger percent"] + "%";
    
    return (
        <div>
            <h1>What is better? Hotdogs or Hamburgers</h1>

            <p>Hambuger votes: {ham} &#40;{hamPercent}&#41;</p>
            <p>Hotdog votes: {hot} &#40;{hotPercent}%&#41;</p>

            <canvas id="myChart"></canvas>

            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script>
                const thing = document.getElementById("myChart");
                
                new Chart(thing)
            </script>
        </div>
    )
}