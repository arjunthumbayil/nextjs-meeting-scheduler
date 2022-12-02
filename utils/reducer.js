export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newMeeting = [...state.meetings, action.payload];
    return {
      ...state,
      meetings: newMeeting,
      isModalOpen: true,
      modalContent: "Success! Your Meeting is Scheduled!",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter all values",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newMeetings = state.meetings.filter(
      (meeting) => meeting.id !== action.payload
    );
    return {
      ...state,
      meetings: newMeetings,
      isModalOpen: true,
      modalContent: "Meeting Canceled",
    };
  }
  throw new Error("no matching action type");
};
