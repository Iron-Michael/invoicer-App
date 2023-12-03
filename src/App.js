import { useState } from "react";

import { ClientDetails } from "./components/ClientDetails";
import { Dates } from "./components/Dates";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainDetails } from "./components/MainDetails";
import { Notes } from "./components/Notes";
import { Table } from "./components/Table";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 md:mx-auto lg:max-w-2xl xl:max-w-4 bg-white rounded shadow ">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table />

            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              email={email}
              website={website}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />

            <button
              onClick={() => setShowInvoice(false)}
              className=" mt-5 bg-blue-500 text-white font-bold 
            py-2  px-8 rounded shadow border-2 
            border-blue-500 hover:bg-transparent 
            hover:text-blue-500
            transition-all duration-300
            "
            >
              {" "}
              Edit information
            </button>
          </div>
        ) : (
          <>
            {/* name Address Email PhoneNumber 
            Bank Name Bank Account clientname clientAddress
             InvoiceNumber Invoice date due Date Table notes  */}

            <div className="flex flex-col justify-center ">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="address">Enter Your Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email">Enter Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="website">Enter Your Website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="enter your Website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />

              <label htmlFor="phone">Enter Your phone</label>
              <input
                type="url"
                name="phone"
                id="phone"
                placeholder="enter your phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="bankName">Enter Your bankName</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="enter your bankName"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">Enter Your bankAccount</label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="enter your bankAccount"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName">Enter Your clientName</label>
              <input
                type="url"
                name="clientName"
                id="clientName"
                placeholder="enter your client's Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Enter Your clientAddress</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="enter your client's Address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber">invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="textarea"
                id="notes"
                cols={30}
                rows={10}
                placeholder="Additional notes to the clients"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className=" bg-blue-500 text-white font-bold 
            py-2  px-8 rounded shadow border-2 
            border-blue-500 hover:bg-transparent 
            hover:text-blue-500
            transition-all duration-300
            "
              >
                {" "}
                Preview Invoice{" "}
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
