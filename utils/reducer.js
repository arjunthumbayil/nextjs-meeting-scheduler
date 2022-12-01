export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newMeeting = [...state.meetings, action.payload];
    return {
      ...state,
      meetings: newMeeting,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter all values",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newMeetings = state.meetings.filter(
      (meeting) => meeting.id !== action.payload
    );
    return { ...state, people: newMeetings };
  }
  throw new Error("no matching action type");
};
