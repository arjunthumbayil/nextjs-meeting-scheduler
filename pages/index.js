import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import React, { useState, useReducer } from "react";
import Modal from "../components/Modal";
// reducer function
import { reducer } from "../utils/reducer";
const defaultState = {
  meetings: [],
  isModalOpen: false,
  modalContent: "",
};

export default function Home() {
  const [meeting, setMeeting] = useState({
    meetingName: "",
    meetingDetails: "",
    meetingDuration: "",
    meetingStartTime: "",
    meetingDate: "",
  });
  // const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeeting({ ...meeting, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      meeting.meetingName &&
      meeting.meetingDetails &&
      meeting.meetingDuration &&
      meeting.meetingStartTime &&
      meeting.meetingDate
    ) {
      const newMeeting = { ...meeting, id: new Date().getTime().toString() };
      dispatch({ type: "ADD_ITEM", payload: newMeeting });
      setMeeting({
        meetingName: "",
        meetingDetails: "",
        meetingDuration: "",
        meetingStartTime: "",
        meetingDate: "",
      });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Meeting Scheduler 1.0.1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="meetingName">Name : </label>
          <input
            className={styles.formInput}
            type="text"
            id="meetingName"
            name="meetingName"
            value={meeting.meetingName}
            placeholder="identifies the meeting.."
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="meetingDetails">Details : </label>
          <input
            className={styles.formInput}
            type="text"
            id="meetingDetails"
            name="meetingDetails"
            value={meeting.meetingDetails}
            placeholder="additional info about meeting.."
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="meetingDuration">Duration : </label>
          <input
            className={styles.formInput}
            type="number"
            id="meetingDuration"
            name="meetingDuration"
            value={meeting.meetingDuration}
            placeholder="in minutes.."
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="meetingStartTime">Start Time : </label>
          <input
            className={styles.formInput}
            type="time"
            id="meetingStartTime"
            name="meetingStartTime"
            value={meeting.meetingStartTime}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="meetingDate">Date : </label>
          <input
            className={styles.formInput}
            type="date"
            id="meetingDate"
            name="meetingDate"
            value={meeting.meetingDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Schedule Meeting
        </button>
      </form>

      {state.meetings.map((meeting) => {
        return (
          <div key={meeting.id} className={styles.item}>
            <Link
              href={`/details/${meeting.id}/${meeting.meetingName}/${meeting.meetingDetails}/${meeting.meetingDuration}/${meeting.meetingStartTime}/${meeting.meetingDate}`}
              legacyBehavior
            >
              <a className={styles.itema}>
                <h4 className={styles.itemh4}>{meeting.meetingName}</h4>
                <h4 className={styles.itemh4}>{meeting.meetingStartTime}</h4>
                <h4 className={styles.itemh4}>{meeting.meetingDate}</h4>
                {/* <button
                  className={styles.formButton}
                  onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
                >
                  remove
                </button> */}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
