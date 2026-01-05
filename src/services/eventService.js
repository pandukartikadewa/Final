const API_URL = "https://694fba2e8531714d9bcecda3.mockapi.io/api/v1/events";

export async function getEvents() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getEventById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}