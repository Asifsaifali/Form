import { Obj } from "../Page/FormPage"

const dataFunc = async()=>{
    let newData = await Obj;
const data = [
    {
        "Fname" : newData.Fname,
        "Lname" : newData.Lname,
        "Guardians_name" : newData.Guardians_name,
        "dob" : newData.dob,
        "Mob_No" : newData.Mob_No,
        "Class" : "",
        "School" : "",
    }
]

console.log(data)
}
