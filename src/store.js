import { writable } from "svelte/store";

const storedEvents = localStorage.getItem("events");

export const events = writable(storedEvents);

events.subscribe((value) => {
  localStorage.setItem("events", value);
});
