

export default function EmployeeCard(props) {

    return (<>
        <div className="flex flex-col items-center pt-6 w-44 h-72 bg-slate-950 rounded-lg border border-amber-400 relative">
            <div className="w-20 h-20">
                <div className="w-full h-full rounded-[50%] border-2 border-white">
                    <img className="w-full h-full" src={props.srcImg} alt={props.Name} />
                </div>
            </div>
            <div className="text-center mt-4">
                <h3 className="text-amber-400 text-xl leading-4  font-medium capitalize ">{props.Name}</h3>
                <h6 className="text-white text-sm font-normal capitalize leading-9">{props.Role}</h6>
            </div>

            <div className="w-4/5 flex justify-around absolute bottom-3">
                <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950">
                    <img className="w-3/5 h-3/5" src="msg-4.png" alt="" />
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950">
                    <img className="w-3/5 h-3/5" src="msg-3.png" alt="" />
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950">
                    <img className="w-3/5 h-3/5" src="msg-2.png" alt="" />
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950">
                    <img className="w-3/5 h-3/5" src="msg-1.png" alt="" />
                </div>
            </div>
        </div>
    </>)
}
