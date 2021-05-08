import {useState, useEffect} from 'react'

function About(props) {
    // create state to hold about data
    const [about, setAbout] = useState(null)

    // create function to make api call
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about")
        // turn response into javascript object
        const data = await response.json()
        // set about state to the data
        setAbout(data)
    }

    //make an inital call for the data inside useEffect, so it only happens once on component load
    useEffect(() => {
        getAboutData()
    }, [])

    //define a function that will return the JSX neede once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <img src={about.headshot} alt="" />
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )

    //if data arrives return the result of laoded and if not an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>

}

export default About