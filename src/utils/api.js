const BASE_URL = "http://localhost:3001/api";

/* const BASE_URL = "https://two50708-eventserver.onrender.com/api";*/

/* do not use the URL of the deployed server. 
 It doesnt work. Wait for Anoj or any Instructor's feedback */

export async function fetchEvents() {
  try {
    const res = await fetch(`${BASE_URL}/events`);
    console.log("Raw response:", res); // log raw response

    if (!res.ok) throw new Error("Failed to fetch events");
    const json = await res.json();
    console.log("API response:", json); // to inspect this in Console.

    return Array.isArray(json) ? json : [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // return empty array on error to avoid .map crash
  }
}
