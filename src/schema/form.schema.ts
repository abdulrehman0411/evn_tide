import  * as Yup from "yup";

export const formSchema = Yup.object({
    name: Yup.string().required("Please Enter Your Name!"),
    amount: Yup.number().required("Please Enter The Amount"),
    coin: Yup.string().required("Please enter your Coin"),
    
  })