const USERS_API = "https://695529841cd5294d2c7e8d7f.mockapi.io/api/v1/users";

export async function getUsers() {
    const response = await fetch(USERS_API);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return await response.json();
}
