import React from "react";
import Footer from "./Footer";
import Nav from "../components/Nav";
const Payments = () => {
  return (
    <div>
      <Nav/>
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Payments</h1>
        <p className="mt-4 text-gray-500">
          Choose your preferred payment method for tuition and other fees.
        </p>
      </div>

      <div className="space-y-12">
        {/* Bank Accounts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Bank Accounts</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              You can pay through the following bank accounts:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Bank Name:</strong> ABC Bank
                <br />
                <strong>Account Number:</strong> 123456789
                <br />
                <strong>Branch:</strong> Main Branch
              </li>
              <li>
                <strong>Bank Name:</strong> XYZ Bank
                <br />
                <strong>Account Number:</strong> 987654321
                <br />
                <strong>Branch:</strong> Uptown Branch
              </li>
            </ul>
          </div>
        </section>

        {/* Mobile Banking (Mpesa) Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Mobile Banking (Mpesa)</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              Follow these steps to pay using Mpesa:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to your Mpesa menu.</li>
              <li>Select "Lipa na Mpesa".</li>
              <li>Select "Pay Bill".</li>
              <li>
                Enter Business Number: <strong>123456</strong>
              </li>
              <li>
                Enter Account Number: <strong>Your Student ID</strong>
              </li>
              <li>Enter the amount you wish to pay.</li>
              <li>Enter your Mpesa PIN and confirm the payment.</li>
              <li>You will receive a confirmation SMS from Mpesa.</li>
            </ol>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payments;
