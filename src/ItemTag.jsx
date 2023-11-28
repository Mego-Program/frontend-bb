

export default function ItemTag(props) {

    return (<>
    <div className="flex justify-center items-center min-w-[64px] h-16 bg-slate-900 hover:bg-amber-400 rounded-lg">
        <img className=" w-4 h-5 lg:w-6 lg:h-7" src={props.srcImg} alt="icon" />
    </div>
    
    </>)
}