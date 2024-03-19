import { useContext } from "react"
import DataContext from "../context/GlobalProvider"
export const useData=()=>{
    return useContext(DataContext)
}