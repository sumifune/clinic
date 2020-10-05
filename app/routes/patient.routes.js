module.exports = app => {
  const patients = require("../controllers/patient.controller.js");

  var router = require("express").Router();

  // Create a new Patient
  router.post("/", patients.create);

  // Retrieve all Patients
  router.get("/", patients.findAll);

  // Retrieve all published Patients
  router.get("/published", patients.findAllActive);

  // Retrieve a single Patient with id
  router.get("/:id", patients.findOne);

  // Retrieve a single Patient with id
  router.put("/:id/addob", patients.addObservation);

  // Retrieve a single Patient with id
  router.get("/:id/obs", patients.getObservations);

  // Retrieve a single Patient with id
  router.delete("/:id/obs", patients.deleteObservation);

  // Update a Patient with id
  router.put("/:id", patients.update);

  // Delete a Patient with id
  router.delete("/:id", patients.delete);

  // Create a new Patient
  router.delete("/", patients.deleteAll);

  app.use('/api/patients', router);
};