import axios from "axios"
import Resources from "@/app/resources/resources"
export default async function redirect(access_token: any, id: any, cohort_id: any){
    let header={
        headers: {
            "apitoken": access_token
        }
    }
    // console.log(header)
    try{
        console.log(await axios.post(Resources.config["vibesearchAPIEndpoint"] + "/redirect", 
            {
                "product_id" : id,
                "cohort_ids": cohort_id
            }, header
        ))
        // console.log(results)
    }catch(e){
        // console.log(e)
    }
}