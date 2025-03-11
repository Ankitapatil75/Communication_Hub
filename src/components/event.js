import React, { useState } from "react";

const initialEvents = [
    { id: 1, title: "Charity Run", date: "2025-04-10", location: "City Park", description: "A 5K run for charity.", category: "Charity" },
    { id: 2, title: "Community Gathering", date: "2025-04-15", location: "Town Hall", description: "A local social meetup.", category: "Social" },
    { id: 3, title: "Interfaith Dialogue", date: "2025-04-20", location: "Peace Center", description: "A discussion on faith and unity.", category: "Religious" }
];

export default function Event() {
    const [events, setEvents] = useState(initialEvents);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "", description: "" });

    const handleFilterChange = (e) => setCategoryFilter(e.target.value);

    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleAddEvent = () => {
        if (newEvent.title && newEvent.date && newEvent.category) {
            setEvents([...events, { ...newEvent, id: events.length + 1 }]);
            setNewEvent({ title: "", date: "", category: "", location: "", description: "" });
        }
    };

    const filteredEvents = categoryFilter ? events.filter(event => event.category === categoryFilter) : events;

    return (
        <div className="container-fluid mt-4 mb-4">
            <h1 className="mb-4 text-center">Event Listing</h1>

            <div className="d-flex justify-content-center mb-4">
                <select onChange={handleFilterChange} className="form-select w-auto">
                    <option value="">All Categories</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
            </div>

            <div className="row justify-content-center">
                {filteredEvents.map(event => (
                    <div key={event.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card h-100 p-2">
                            <h2 className="h5">{event.title}</h2>
                            <div className="card-body text-start">
                                <p><strong>Date:</strong> {event.date}</p>
                                <p><strong>Location:</strong> {event.location}</p>
                                <p><strong>Description:</strong> {event.description}</p>
                                <p><strong>Category:</strong> {event.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card p-4 mx-auto responsive-width">
                <h2 className="h5 text-center">Add New Event</h2>
                <input name="title" placeholder="Title" value={newEvent.title} onChange={handleInputChange} className="form-control mb-2" />
                <input name="date" type="date" value={newEvent.date} onChange={handleInputChange} className="form-control mb-2" />
                <input name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} className="form-control mb-2" />
                <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} className="form-control mb-2"></textarea>
                <select name="category" value={newEvent.category} onChange={handleInputChange} className="form-select mb-2">
                    <option value="">Select Category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
                <button onClick={handleAddEvent} className="btn btn-primary w-100">Add Event</button>
            </div>
        </div>
    );
};
