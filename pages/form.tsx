import { useMutation, useQuery } from "../convex/_generated/react"

const TestFunction = () => {
    const submitFreeItem = useMutation("submitFreeItem")

    const freeItems = useQuery("getFreeItems") || [];

    const miniFunction = () => {
        // console.log("Hey hey")
        submitFreeItem("test", 5, 6)
    }
    return <div><h1>hello</h1>
        <button onClick={miniFunction}>Our test button</button>
        {freeItems.map(f => <div className="bs-button" key={f._id.toString()} style={{backgroundColor: 'lightblue'}}>{f.nameOfItem}</div>)}

        </div>
}







export default TestFunction
