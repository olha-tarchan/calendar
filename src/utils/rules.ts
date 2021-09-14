import moment, {Moment} from "moment";

export const rules = {
    required: (messaga:string = "Fill in the field") => ({
        required: true,
        messaga
    }),
    isDateAfter: (message: string) =>  ({
      validator(_:any, value: Moment){
          if(value.isSameOrAfter(moment())){
              return Promise.resolve();
          }
          return Promise.reject(new Error(message));
      }
    })
}