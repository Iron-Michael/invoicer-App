function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow ">
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
              Invoicer
            </h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button onClick={handlePrint} className="btn btn-print">
                  print
                </button>
              </li>
              <li>
                <button className="btn btn-download">Download</button>
              </li>
              <li>
                <button className="btn btn-send">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* end of header */}
        {/* your detail */}
        <section className="flex items-end justify-end flex-col">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter Your name?"
            required
          />
          <h2 className="text-xl uppercase">Sitthisak Logate</h2>
          <p>Your Address</p>
        </section>
        {/* end of your detail */}
        {/* client detail */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client Name</h2>
          <h2>Client Address</h2>
        </section>
        {/* end of client details */}

        {/* Date */}
        <article className="my-5 flex items-end justify-end ">
          <ul>
            <li>
              {" "}
              <span className="font-bold">Invoicer Number:</span>{" "}
            </li>
            <li>
              <span className="font-bold">Invoice date :</span>{" "}
            </li>
            <li>
              <span className="font-bold">Due Date</span>
            </li>
          </ul>
        </article>
        <div className="my-5">this is the table</div>

        {/* End of dates */}

        {/* table */}

        {/* End of table */}

        {/* Note */}
        <section className="mb-5">
          {/* text area */}

          <p>Notes to the clients...</p>
        </section>
        {/* End of notes */}

        {/* Footer */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Your Name</span> :Sitthisak Logate
            </li>
            <li>
              <span className="font-bold">Your Email</span>{" "}
              :sitthisaklo@kkumail.com
            </li>
            <li>
              <span className="font-bold">Phone Number</span> :01234567897
            </li>
            <li>
              <span className="font-bold">Bank</span> : KrungMike{" "}
            </li>
            <li>
              <span className="font-bold">Account Holder</span> :Sitthisak
              Logate
            </li>
            <li>
              <span className="font-bold">Account Number</span> :789745661233
            </li>
            <li>
              <span className="font-bold">Website</span> :www.ironMike.com
            </li>
          </ul>
        </footer>
        {/* End of footer */}
      </main>
    </>
  );
}

export default App;
