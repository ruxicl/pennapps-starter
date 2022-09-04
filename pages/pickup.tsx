import { last } from "lodash";
import { unstable_UserBlockingPriority } from "scheduler";
import getLocation from "../convex/getLocation";
import { useMutation, useQuery } from "../convex/_generated/react"

const TestFunction = () => {

    const freeItems = useQuery("getFreeItems") || [];
    const bookedItems = useQuery("getBookedItems") || [];

    const changeStatusItem = useMutation("changeStatusItem")

    return <div className="container"> {DisplayHeader()}
    <h1>AVAILABLE ITEMS</h1>
    {freeItems.map(f => <div key={f._id.toString()} style={{backgroundColor: 'lightgreen'}}>{f.nameOfItem}
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'green'}} onClick={() => changeStatusItem(f._id, "booked")}>Book</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'green'}}>See on Map</button></div>)}

    &nbsp;&nbsp;&nbsp;&nbsp;
    <h3>BOOKED ITEMS</h3>
    {bookedItems.map(f => <div key={f._id.toString()} style={{backgroundColor: 'lightblue'}}>{f.nameOfItem}
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'blue'}} onClick={() => changeStatusItem(f._id, "taken")}>Collected</button>
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'blue'}}>See on Map</button></div>)}
    &nbsp;&nbsp;&nbsp;&nbsp;
    {DisplayLocation()}
    {DisplayNearbyCentres()}

    &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
}

const DisplayHeader = () => {
    return <header>
        <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
            <h1 className="mb-3" >Pickup</h1>
            <h4 className="mb-3">See all the objects that you can collect</h4>
        </div>
    </header>
}

export default TestFunction

const DisplayNearbyCentres = () => {
    return <header>
        <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
            <h3 align="left" className="mb-3"> Closest Recycling Centre</h3>
            <p align="left" className="mb-3"> Allow the browser to locate you in order to find the nearest centre</p>
            <p align="left" className="mb-3"> We will not store your address for any other purposes</p>
        
        <p><b>The closest centre to you is:&nbsp;&nbsp;</b>
        <a href="https://dc.seas.upenn.edu/green-team/recycling-options">Penn Engineering Recycling Centre</a>
        </p>
        </div>

    </header>
}

const DisplayLocation = () => {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          return "Geolocation is not supported by this browser.";
        }
      
      function showPosition(position) {
        return "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
      }
}

const DisplayCentresList = () => {

}
