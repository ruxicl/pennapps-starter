import { useMutation, useQuery } from "../convex/_generated/react"

const TestFunction = () => {

    const freeItems = useQuery("getFreeItems") || [];

    return <div className="container"> {DisplayHeader()}
    <div>
    {freeItems.map(f => <div className="bs-button" key={f._id.toString()} style={{backgroundColor: 'lightgreen'}}>{f.nameOfItem}</div>)}
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
