"use client";

import { useEffect, useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplicationForm() {
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState("0%");
  const [today, setToday] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Set today's date
    const currentDate = new Date().toISOString().split("T")[0];
    setToday(currentDate);

    // Initialize EmailJS (replace with your actual key)
    emailjs.init("lR2dfoi59fNoEUM_P");
  }, []);

  // Handle marks input change
  const handleMarksChange = () => {
    const marksInputs = document.querySelectorAll<HTMLInputElement>(".marks-input");
    let totalMarks = 0;
    let count = 0;

    marksInputs.forEach((input) => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        totalMarks += value;
        count++;
      }
    });

    const percentageValue = count > 0 ? (totalMarks / (count * 100)) * 100 : 0;
    setTotal(totalMarks);
    setPercentage(percentageValue.toFixed(2) + "%");
  };

  // Handle form submit
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const studentName = (form["student_name"] as HTMLInputElement)?.value.trim();

    if (!studentName) {
      alert("Student name must be filled out");
      return;
    }

    try {
      await emailjs.sendForm("service_vcmw8nt", "template_g0rhmkp", form);

      setSuccessMessage(`Thanks for submitting the form, ${studentName}`);
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 4000);

      alert(`Thanks for submitting the form, ${studentName}`);
      form.reset();
      setTotal(0);
      setPercentage("0%");
      setToday(new Date().toISOString().split("T")[0]);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("There was an error sending the form. Please try again.");
    }
  };

  return (
    <div className="relative py-10 bg-gradient-to-br from-white via-red-100 to-white">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 opacity-10 animate-[bgZoom_30s_ease-in-out_infinite_alternate] bg-cover bg-center"
        style={{ backgroundImage: "url('bgimage.jpeg')" }}
      />

      {/* Form Animation */}
      <motion.form
        id="applicationForm"
        className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-10 border border-red-300"
        onSubmit={handleFormSubmit}
        encType="multipart/form-data"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-red-600">ENLIGHT GROUP OF INSTITUTIONS</h2>
            <p className="text-sm text-gray-700 mt-2">
              Recognised by the Govt. of Karnataka and Affiliated to KSNC, KSDNEB,
              Paramedical Board & INC New Delhi <br />
              Reg. Address: Pipe Line Road, Magadi Main Road, Vishwaneedam Post,
              Bangalore, Karnataka <br />
              82/17, Tavarekere Village, Bangalore South Taluk, Karnataka - 562130
            </p>
          </div>
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-red-300 shadow-lg"
            style={{ backgroundImage: "url('bgimage.jpeg')" }}
          ></div>
        </div>

        {/* Student Information */}
        <section className="bg-white border border-red-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold text-red-600 mb-4">Student Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="student_name" type="text" placeholder="Student Full Name*" className="border p-2 rounded w-full" required />
            <input name="dob" type="date" className="border p-2 rounded w-full" required />
            <input name="father_name" type="text" placeholder="Father's Name*" className="border p-2 rounded w-full" required />
            <input name="father_mobile" type="tel" placeholder="Father's Mobile*" className="border p-2 rounded w-full" required />
            <input name="mother_name" type="text" placeholder="Mother's Name" className="border p-2 rounded w-full" />
            <input name="mother_mobile" type="tel" placeholder="Mother's Mobile" className="border p-2 rounded w-full" />
            <input name="nationality" type="text" placeholder="Nationality*" className="border p-2 rounded w-full" required />
            <input name="caste" type="text" placeholder="Caste" className="border p-2 rounded w-full" />
            <select name="sex" className="border p-2 rounded w-full" required>
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input name="citizenship" type="text" placeholder="Citizenship No." className="border p-2 rounded w-full" />
          </div>
        </section>

        {/* Course Applying For */}
        <section className="bg-white border border-red-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold text-red-600 mb-4">Course Applying For*</h3>
          <select name="course" className="border p-2 rounded w-full" required>
            <option value="">-- Select Course --</option>
            <option value="Nursing">Nursing</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Paramedical">Paramedical</option>
            <option value="Allied Science">Allied Science</option>
            <option value="Physiotherapy">Physiotherapy</option>
          </select>
        </section>

        {/* Marks Section */}
        <section className="bg-white border border-red-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Marks Scored in Class XII</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-red-500 text-sm text-left text-gray-700">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="border border-red-500 px-4 py-2">Subject</th>
                  <th className="border border-red-500 px-4 py-2">Marks Scored</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {["Language I", "Language II", "Chemistry", "Mathematics", "Biology", "Physics"].map((subject, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{subject}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        name={subject.toLowerCase().replace(" ", "")}
                        className="w-full p-1 border rounded marks-input"
                        min="0"
                        max="100"
                        onInput={handleMarksChange}
                        required
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border px-4 py-2 font-semibold">Total</td>
                  <td className="border px-4 py-2">
                    <input type="number" value={total} readOnly className="w-full p-1 border rounded bg-gray-100" />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Percentage</td>
                  <td className="border px-4 py-2">
                    <input type="text" value={percentage} readOnly className="w-full p-1 border rounded bg-gray-100" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Submit Buttons */}
        <div className="flex justify-center gap-6 pt-4">
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md shadow">
            Submit
          </button>
          <button type="reset" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-md shadow">
            Clear
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-6">
          &copy; All rights reserved | Design and developed by
        </div>
      </motion.form>

      {/* ✅ Success Message with Framer Motion */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            id="success-message"
            className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-lg font-semibold px-6 py-4 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {successMessage || "Form submitted successfully!"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
