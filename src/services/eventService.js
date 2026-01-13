const API_URL = "https://695529841cd5294d2c7e8d7f.mockapi.io/api/v1/events";

// إذا احتجت proxy فعّله هنا، وإلا اتركه فارغًا
const CORS_PROXY = ""; 
// مثال عند الحاجة فقط:
// const CORS_PROXY = "https://corsproxy.io/?";

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // DELETE أحيانًا لا يعيد JSON
    if (options.method === "DELETE") {
      return true;
    }

    return await response.json();
  } finally {
    clearTimeout(id);
  }
}

// READ
export function getEvents() {
  return fetchWithTimeout(API_URL);
}

export function getEventById(id) {
  return fetchWithTimeout(`${API_URL}/${id}`);
}

// CREATE
export function createEvent(data) {
  if (!data || Object.keys(data).length === 0) {
    throw new Error("Data event kosong");
  }

  return fetchWithTimeout(CORS_PROXY + API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

// DELETE
export function deleteEvent(id) {
  if (!id) {
    throw new Error("ID tidak valid");
  }

  return fetchWithTimeout(CORS_PROXY + `${API_URL}/${id}`, {
    method: "DELETE",
  });
}

// UPDATE
export function updateEvent(id, data) {
  if (!id) {
    throw new Error("ID tidak valid");
  }

  return fetchWithTimeout(CORS_PROXY + `${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
