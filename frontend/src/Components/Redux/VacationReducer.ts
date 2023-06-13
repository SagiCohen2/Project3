import Vacation from "../../Model/Vacation";


export class VacationsState {
    public allVacations:Vacation[] = [];
}

// what the action will use
export enum VacationActionType {
    addVac = "addVac",
    deleteVac = "deleteVac",
    editVac = "editVac",
}

// action interface
export interface VacationAction {
    type: VacationActionType;
    payload?: any;
}

export const addVacAction = (newVacation:Vacation): VacationAction => {
        return { type:VacationActionType.addVac, payload: newVacation };
};

export const deleteVacAction = (VacationID:number): VacationAction => {
    return { type:VacationActionType.deleteVac, payload: VacationID };
};

export const editVacAction = (newVacation:Vacation): VacationAction => {
    return { type:VacationActionType.editVac, payload: newVacation };
};

// the reducer
export function VacationReducer (
    currentState: VacationsState = new VacationsState(),
    action: VacationAction
): VacationsState {
    const newState = { ...currentState };

    switch (action.type) {
        case VacationActionType.addVac:
            newState.allVacations = [newState.allVacations,action.payload]
            break;

        case VacationActionType.deleteVac:
            newState.allVacations = [...newState.allVacations].filter(item=>item.vacKey !== action.payload)
            break;
        
        // ANOTHER CASE
        // case VacationActionType.editVac:
        //     newState.allVacations = []             
    }

    return newState;
}

