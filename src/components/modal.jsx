const Moldal = ({open, children, onClose}) => {
    if(!open) return null;
    return (
        <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-50"></div>
         <div className="w-sm sm:w-3xl fixed top-1/2 left-1/2 -translate-1/2 bg-gray-200 z-100 ">
         <button className="w-20 h-10 bg-gray-800 text-lg text-gray-200 float-right font-normal hover:bg-red-700 cursor-pointer" onClick={onClose}>Close</button>
            <div className="p-5">
                
                {children}
            </div>
        </div>
        </>
    );
}
 
export default Moldal;