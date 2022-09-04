import { useMutation, useQuery } from "../convex/_generated/react"

const TestFunction = () => {
    const submitFreeItem = useMutation("submitFreeItem")

    const freeItems = useQuery("getFreeItems") || [];
    const header = DisplayHeader();

    const miniFunction = () => {
        // console.log("Hey hey")
        submitFreeItem("test", 5, 6)
    }

    return <div> {DisplayHeader()}
    <div><h1>hello</h1>
    <a className="btn btn-primary" onClick={miniFunction} role="button" style={{backgroundColor: 'green'}}>Submit Form</a>
    {freeItems.map(f => <div className="bs-button" key={f._id.toString()} style={{backgroundColor: 'lightgreen'}}>{f.nameOfItem}</div>)}
    </div></div>
}

const DisplayHeader = () => {
    return <header>
    <div className="p-5 text-center bg-light">
        <h1 className="mb-3">DROP</h1>
        <h4 className="mb-3">Fill out the form below with the info about the item you want to dispose of!</h4>
    </div>
    </header>
}

export default TestFunction
