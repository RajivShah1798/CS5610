import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: {name: "New Assignment",
                description: "New Description",
                points: "100",
                availableFromDate: new Date().getDate.toString(),
                dueDate: new Date().getDate.toString(),
                availableUntilDate: new Date().getDate.toString()
                },
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers:{
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, _id: new Date().getTime.toString()},
                ...state.assignments
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(
                (assignment) => {
                    if (assignment._id === action.payload._id) {
                        return action.payload;
                    }
                    else {
                        return assignment;
                    }
                }
            );
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        }
     }
});


export const {addAssignment, deleteAssignment, updateAssignment, selectAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;