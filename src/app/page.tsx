import { headers } from 'next/headers';

export default async function Page() {
    const headerList = headers();
    const domainName = (await headerList).get('host');

    const response = await fetch(`http://${domainName}/voting/result`, {
        method: "GET"
    });

    const body = JSON.parse(await response.json());

    console.log(body)

    return (
        <div>
            <h1>What is better? Hotdogs or Hamburgers</h1>

            <div>
                <p>Hambuger votes: {await body["hamburger"]} ({await body["hamburger percent"]}%)</p>
                <p>Hotdog votes: {await body["hotdog"]} ({await body["hotdog percent"]}%)</p>
            </div>
        </div>
    )
}