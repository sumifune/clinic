module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: String,
      surname: String,
      address: String,
      city: String,
      dni: String,
      phone: String,
      email: String,
      description: String,
      active: Boolean,
      observations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Observation'
      }],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Patient = mongoose.model("Patient", schema);
  return Patient;
};