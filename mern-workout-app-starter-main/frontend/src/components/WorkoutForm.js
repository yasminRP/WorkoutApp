import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent unauthenticated users from submitting
        if (!user) {
            setError("You must be logged in to add workouts.");
            return;
        }

        const workout = { title, load, reps };

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`, // Include JWT token
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            setTitle("");
            setLoad("");
            setReps("");
            setError(null);
            console.log("New workout added", json);
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />

            <label>Load (kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                required
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                required
            />

            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;
