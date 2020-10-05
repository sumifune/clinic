module.exports = app => {
  const appointments = require("../controllers/appointment.controller.js");

  var router = require("express").Router();

  // Create a new Appointment
  router.post("/", appointments.create);

  // Retrieve all Appointments
  router.get("/", appointments.findAll);

  // Retrieve all scheduled Appointments on a date
  router.get("/scheduled", appointments.findAllByDate);

  // Retrieve all scheduled appointments for the next five dates
  router.get("/scheduled/next", appointments.findAllByDateNext);

	// appointments?patientid=${id}` -->  query string or path params ????
  // Retrieve all scheduled appointments by patients ID
  router.get("/patient/:id", appointments.findAllByPatientId);

  // canceled, pending, missed, fulfilled
  // Retrieve all pending Appointments
  router.get("/pending", appointments.findAllPending);

  // Retrieve a single Appointment with id
  router.get("/:id", appointments.findOne);

  // Update a Appointment with id
  router.put("/:id", appointments.update);

  // Delete a Appointment with id
  router.delete("/:id", appointments.delete);

  // Create a new Appointment
  router.delete("/", appointments.deleteAll);

  app.use('/api/appointments', router);
};