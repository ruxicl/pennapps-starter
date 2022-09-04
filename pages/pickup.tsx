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
    <h1>BOOKED ITEMS</h1>
    {bookedItems.map(f => <div key={f._id.toString()} style={{backgroundColor: 'lightblue'}}>{f.nameOfItem}
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'blue'}} onClick={() => changeStatusItem(f._id, "taken")}>Collected</button>
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'blue'}}>See on Map</button></div>)}
    &nbsp;&nbsp;&nbsp;&nbsp;
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
            <h1 className="mb-3"> Closest Recycling Centre</h1>
            <p className="mb-3"> Enter your address and we will find the closes recycling centre for you to drop of the items you collected</p>
            <p className="mb-3"> We will not store your address for any other purposes</p>
        </div>
    </header>
}

const DisplayLocation = () => {
    // const location = useQuery("getLocation") || "";
    return <div><button id = "find-me">Show my location</button><br/>
        <p id = "status"></p>
        <a id = "map-link" target="_blank"></a>
    </div>
}

const DisplayCentresList = () => {

}
