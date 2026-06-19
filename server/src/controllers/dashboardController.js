import Admission from "../models/Admission.js";
import Contact from "../models/Contact.js";
import Event from "../models/Event.js";
import Gallery from "../models/Gallery.js";
import Notice from "../models/Notice.js";

export const getDashboardStats = async (req, res, next) => {
  try {
    const [
      totalAdmissions,
      pendingAdmissions,
      approvedAdmissions,
      rejectedAdmissions,
      totalEvents,
      totalGalleryImages,
      totalContactMessages,
      totalNotices
    ] = await Promise.all([
      Admission.countDocuments(),
      Admission.countDocuments({ status: "Pending" }),
      Admission.countDocuments({ status: "Approved" }),
      Admission.countDocuments({ status: "Rejected" }),
      Event.countDocuments(),
      Gallery.countDocuments(),
      Contact.countDocuments(),
      Notice.countDocuments()
    ]);

    res.json({
      totalAdmissions,
      pendingAdmissions,
      approvedAdmissions,
      rejectedAdmissions,
      totalEvents,
      totalGalleryImages,
      totalContactMessages,
      totalNotices
    });
  } catch (error) {
    next(error);
  }
};