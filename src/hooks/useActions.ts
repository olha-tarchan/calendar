/*
    С помощью данного хука можно к готовім ActionCreters забиндить диспатч.
    В ф-ции хука получаем диспатч
    А потом возращаем ActionCreters к которым прибиндин уже данный диспатч с помощью метода
 */
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {bindActionCreators} from "redux";
import {allActionCreators} from "../store/reducers/action-creators";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch)
}