export async function Weather({ city, unit }) {
    const url = `https://api.example.com/weather?city=${city}&unit=${unit}`
    console.log("url: ", url)
    const data = await fetch(url);
  
    return (
      <div>
        <div>{data.temperature}</div>
        <div>{data.unit}</div>
        <div>{data.description}</div>
      </div>
    );
}