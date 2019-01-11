// const SEQ_PLATFORM = 'SEQ_PLATFORM'
const INPUT_TYPE = 'INPUT_TYPE'
const INPUT_TYPE_CHECKED = 'INPUT_TYPE_CHECKED'
const EXISTING_PROJECT_FILE = 'EXISTING_PROJECT_FILE'
const BIOM_FILE = 'BIOM_FILE'

const initialState = {
    seqPlatform: 'illumina',
    inputType: '',
    radioInputClassChecked: false,
    existingProjectFile: [],
    biomFile: []
}

export default function mainReducer (state = initialState, action){
    switch (action.type){
        case INPUT_TYPE:
        return{
            ...state,
            inputType: action.payload
        }
        case INPUT_TYPE_CHECKED:
            return{
                ...state,
                radioInputClassChecked: !state.radioInputClassChecked
            }
        case EXISTING_PROJECT_FILE:
            return{
                ...state,
                existingProjectFile: action.payload
            }
        case BIOM_FILE:
            return{
                ...state,
                biomFile: action.payload
            }
        default:
            return state
    }
}

export function setInputType(value){
    return{
        type: INPUT_TYPE,
        payload: value
    }
}

// Change button style on click event
export function setInputChecked(){
    return{
        type: INPUT_TYPE_CHECKED,
    }
}

// Maintain file upload from exisiting metagenome project
export function setExistingProjectFile(files){
    return{
        type: EXISTING_PROJECT_FILE,
        payload: files
    }
}

//Maintain the file upload from BIOM File selector
export function setBiomFile(files){
    return{
        type: BIOM_FILE,
        payload: files
    }
}