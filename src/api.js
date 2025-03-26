const API_BASE_URL = 'http://localhost:5000/api';  // Your backend URL

// Fetch all users
export async function fetchUsers() {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

// Add a new user
export async function addUser(name, email) {
    const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
        throw new Error('Failed to add user');
    }
    return response.json();
}
