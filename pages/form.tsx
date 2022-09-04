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
    <a className="btn btn-primary" onClick={miniFunction} role="button" style={{backgroundColor: 'green'}}>Submit Form</a>
    </div>
}

const DisplayHeader = () => {
    return <header>
    <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
        <h1 className="mb-3">DROP</h1>
        <h4 className="mb-3">Fill out the form below with the info about the item you want to dispose of!</h4>
    </div>
    </header>
}

export default TestFunction
