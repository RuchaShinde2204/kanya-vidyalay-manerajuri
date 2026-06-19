import Admission from "../models/Admission.js";

export const createAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.create({
      ...req.body,
      documentUrl: req.fileUrl || ""
    });
    res.status(201).json(admission);
  } catch (error) {
    next(error);
  }
};

export const getAdmissions = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const query = search
      ? {
          $or: [
            { studentName: new RegExp(search, "i") },
            { parentName: new RegExp(search, "i") },
            { contactNumber: new RegExp(search, "i") },
            { gradeApplyingFor: new RegExp(search, "i") }
          ]
        }
      : {};

    const admissions = await Admission.find(query).sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    next(error);
  }
};

export const deleteAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);
    if (!admission) {
      res.status(404);
      return next(new Error("Admission application not found."));
    }
    res.json({ message: "Admission application deleted." });
  } catch (error) {
    next(error);
  }
};

export const updateAdmissionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(admission);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

