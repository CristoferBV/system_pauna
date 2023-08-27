import Sidebar from "./Components/Sidebar/Sidebar";


export default function Layout({children}){
    return(
        <>
            <div>
                <Sidebar/>
                {children}
            </div>
        </>
    )
}