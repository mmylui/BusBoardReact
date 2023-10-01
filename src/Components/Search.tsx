import { useEffect, useState } from "react"

interface props {
    postCodeValue: string,
    onPostCodeValueChange: (newType: string) => void;
};

const Search = ({
    postCodeValue, 
    onPostCodeValueChange
}: props) => {
    const [lat, setLat] = useState<number>(NaN);
    const [lon, setLon] = useState<number>(NaN);

    useEffect(() => {
        console.log(lat, lon)
    },[lat, lon])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`https://api.postcodes.io/postcodes/${postCodeValue}`)
        .then(response => response.json())
        .then((data) => {
            setLat(data.result.longitude);
            setLon(data.result.latitude);
        })
    }
    return(
        <>
            <form id="post-code-search" onSubmit={handleSubmit}>
                <h2>Search for Buses Near You</h2>
                <label htmlFor="postcode">Postcode: </label>
                <input id="postcode" type="text" placeholder="eg. W1A 1AA" value={postCodeValue} onChange={(event) => {onPostCodeValueChange(event.target.value)}}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Search