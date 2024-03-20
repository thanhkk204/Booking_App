import React from "react"

export default function Contact() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feadback about beta feature? Let
          us know
        </p>
        <form className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="What you want to mention about?"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows={6}
              type="text"
              id="message"
              placeholder="Leave a comment..."
              className="form__input mt-1"
            />
          </div>
          <button className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  )
}
