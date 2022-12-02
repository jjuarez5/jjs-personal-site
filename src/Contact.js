function Contact() {
  return (
    <div className="text-zinc-100 bg-blue-800 text-center" id="contact">
      <h1 className="text-5xl text-center flex flex-col justify-center">
        Contact
      </h1>
      <div className="flex justify-center">
        <form className="pt-6 pb-8 mb-4" name="contact" method="post">
          <div className="mb-4">
            <input type="hidden" name="contact" value="contact" />
            <label className="text-zinc-100 text-lg mb-2" for="name">
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
            <label className="text-zinc-100 text-lg mb-2" for="phone">
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
            <label className="block text-zinc-100 text-lg mb-2" for="email">
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
            <label className="block text-zinc-100 text-lg mb-2" for="message">
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
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;{new Date().getFullYear()} Julio Juarez. All rights reserved.
      </p>
    </div>
  );
}

export default Contact;
