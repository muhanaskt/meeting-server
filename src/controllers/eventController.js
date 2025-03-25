const Event = require("../models/Event");
const eventValidationSchema = require("../validators/eventValidator");

// ✅ Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// ✅ Create a new event (No Authentication)
exports.createEvent = async (req, res) => {
  try {
    // Validate request body
    const { error } = eventValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // Create and save event
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ message: "Error adding event", error });
  }
};


// ✅ Update an existing event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error } = eventValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // Find and update event
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Error updating event", error });
  }
};


exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Error deleting event", error });
  }
};
