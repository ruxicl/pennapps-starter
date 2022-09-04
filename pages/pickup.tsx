import { useMutation, useQuery } from "../convex/_generated/react"

const TestFunction = () => {

    const freeItems = useQuery("getFreeItems") || [];

    return <div className="container"> {DisplayHeader()}
    <div>
    {freeItems.map(f => <div className="bs-button" key={f._id.toString()} style={{backgroundColor: 'lightgreen'}}>{f.nameOfItem}</div>)}
    {DisplayNearbyCentres()}
    </div></div>
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

const DisplayNearbyCentres = () => {
    return <header>
    <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
        <h1 className="mb-3"> Closest Recycling Centre</h1>
        <p className="mb-3"> Enter your address and we will find the closes recycling centre for you to drop of the items you collected</p>
        <p className="mb-3"> We will not store your address for any other purposes</p>
    </div>
    </header>
  }
