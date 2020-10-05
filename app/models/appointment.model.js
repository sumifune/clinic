
module.exports = (mongoose, mongoosePaginate) => {

  var schema = mongoose.Schema(
  {
    surname: String,
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient' // Reference to some PatientSchema
    },
    date: Date,
    estate: String,
    hour: String,
    service: String
 },
 { timestamps: true }
 );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Appointment = mongoose.model("Appointment", schema);
  return Appointment;
};