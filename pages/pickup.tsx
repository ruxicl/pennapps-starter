import { unstable_UserBlockingPriority } from "scheduler";
import { useMutation, useQuery } from "../convex/_generated/react"

const TestFunction = () => {

    const freeItems = useQuery("getFreeItems") || [];
    const bookedItems = useQuery("getBookedItems") || [];

    const changeStatusItem = useMutation("changeStatusItem")

    return <div className="container"> {DisplayHeader()}
    <h1>AVAILABLE ITEMS</h1>
    {freeItems.map(f => <div key={f._id.toString()} style={{backgroundColor: 'lightgreen'}}>{f.nameOfItem}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'green'}} onClick={() => changeStatusItem(f._id, "booked")}>Book</button></div>)}
    <h1>BOOKED ITEMS</h1>
    {bookedItems.map(f => <div key={f._id.toString()} style={{backgroundColor: 'lightblue'}}>{f.nameOfItem}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'blue'}} onClick={() => changeStatusItem(f._id, "taken")}>Collected</button></div>)}
    </div>
}

const DisplayHeader = () => {
    return <header>
    <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
        <h1 className="mb-3">Pickup</h1>
        <h4 className="mb-3">See all the objects that you can collect</h4>
    </div>
    </header>
}

export default TestFunction
