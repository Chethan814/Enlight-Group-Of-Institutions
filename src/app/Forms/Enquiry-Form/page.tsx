"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";


// Safe anime.js import for Next.js + TypeScript
let anime: any;
if (typeof window !== 'undefined') {
  anime = require('animejs').default;
}

export default function ApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [today, setToday] = useState("");
  const [total, setTotal] = useState<number>(0);
  const [percentage, setPercentage] = useState<string>("0%");
  const [successMsg, setSuccessMsg] = useState<string>("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("lR2dfoi59fNoEUM_P"); // ✅ Your EmailJS Public Key
  
    // Set current date
    const current = new Date().toISOString().split("T")[0];
    setToday(current);
  
    // Only run animation on client side
    if (typeof window !== 'undefined' && anime) {
      anime({
        targets: ".fade-in",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: "easeOutQuad",
      });
    }
  }, []);

  // Calculate total and percentage
  const calculateMarks = () => {
    const inputs = formRef.current?.querySelectorAll<HTMLInputElement>(".marks-input");
    if (!inputs) return;

    let totalMarks = 0;
    let count = 0;
    inputs.forEach((input) => {
      const val = parseFloat(input.value);
      if (!isNaN(val)) {
        totalMarks += val;
        count++;
      }
    });

    const percent = count > 0 ? ((totalMarks / (count * 100)) * 100).toFixed(2) + "%" : "0%";
    setTotal(totalMarks);
    setPercentage(percent);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const studentName = (form["student_name"] as HTMLInputElement)?.value.trim();
    if (!studentName) {
      alert("Student name must be filled out");
      return;
    }

    emailjs
      .sendForm("service_vcmw8nt", "template_g0rhmkp", form)
      .then(() => {
        setSuccessMsg(`Thanks for submitting the form, ${studentName}`);

        // Animate success message
        const successElement = document.getElementById("success-message");
        if (successElement) {
          anime({
            targets: successElement,
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutQuad",
            complete: () => {
              setTimeout(() => {
                anime({
                  targets: successElement,
                  opacity: [1, 0],
                  duration: 500,
                  easing: "easeInQuad",
                });
              }, 3000);
            },
          });
        }

        alert(`Thanks for submitting the form, ${studentName}`);
        form.reset();
        setTotal(0);
        setPercentage("0%");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("There was an error sending the form. Please try again.");
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-red-100 to-white py-10">
      {/* Background Image Animation */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center opacity-10 -z-10 animate-pulse"
        style={{
          backgroundImage: "url('/bgimage.jpeg')",
        }}
      ></div>

      <form
        ref={formRef}
        id="applicationForm"
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg fade-in space-y-10 border border-red-300"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-red-600">
              ENLIGHT GROUP OF INSTITUTIONS
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Recognised by the Govt. of Karnataka and Affiliated to KSNC, KSDNEB, Paramedical Board & INC New Delhi
              <br />
              Reg. Address: Pipe Line Road, Magadi Main Road, Vishwaneedam Post, Bangalore, Karnataka
              <br />
              82/17, Tavarekere Village, Bangalore South Taluk, Karnataka - 562130
            </p>
          </div>
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-red-300 shadow-lg"
            style={{ backgroundImage: "url('/bgimage.jpeg')" }}
          ></div>
        </div>

        {/* Student Info Section */}
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
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input name="citizenship" type="text" placeholder="Citizenship No." className="border p-2 rounded w-full" />
          </div>
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
                {["Language I", "Language II", "Chemistry", "Mathematics", "Biology", "Physics"].map((subject, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{subject}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        name={subject.toLowerCase().replace(/\s/g, "")}
                        className="w-full p-1 border rounded marks-input"
                        min="0"
                        max="100"
                        required
                        onInput={calculateMarks}
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
          <button
            type="reset"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-md shadow"
            onClick={() => {
              setTotal(0);
              setPercentage("0%");
            }}
          >
            Clear
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-6">
          &copy; All rights reserved | Design and developed by Enlight Group of Institutions
        </div>
      </form>

      {/* Success Message */}
      <div
        id="success-message"
        className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-lg font-semibold px-6 py-4 rounded-lg shadow-lg opacity-0 z-50 pointer-events-none"
      >
        {successMsg}
      </div>
    </div>
  );
}
