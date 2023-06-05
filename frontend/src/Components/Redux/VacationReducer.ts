import Vacation from "../../Model/Vacation";


export class VacationState {
    public allVacations:Vacation[] = [];
}

// what the action will use
export enum VacationAcationType {
    addVac = "addVac",
    deleteVac = "deleteVac",
    editVac = "editVac",
}

