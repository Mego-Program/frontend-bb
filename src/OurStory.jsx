export default function OurStory(props) {

    return (<>

        <div className="w-40 h-16 bg-slate-950 rounded-lg border border-indigo-950">
            <div className=" text-center text-base font-light capitalize leading-tight"><h4>{props.title}</h4></div>
            <div><h5>{props.year}</h5></div>
        </div>
    </>)
}