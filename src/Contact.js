function Contact() {
  return (
    <div
      className="text-black bg-zinc-100 text-center shadow-inner pt-5"
      id="contact"
    >
      <h1 className="text-5xl text-center flex flex-col justify-center">
        Contact
      </h1>
      <div className="flex justify-center">
        <form className="pt-6 pb-8 mb-4" name="contact" method="post">
          <div className="mb-4">
            <input type="hidden" name="form-name" value="contact" />
            <label className="text-black text-lg mb-2" for="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="contactName"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="text-black text-lg mb-2" for="phone">
              Phone Number:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="contactPhone"
              type="tel"
              placeholder="xxx-xxx-xxxx"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-lg mb-2" for="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="contactEmail"
              type="email"
              placeholder="email@something.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-lg mb-2" for="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-400 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-black text-xs">
        &copy;{new Date().getFullYear()} Julio Juarez. All rights reserved.
      </p>
    </div>
  );
}

export default Contact;
