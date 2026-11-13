"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      alert(
        `Thank you, ${formData.name}! Your message has been sent. We will get back to you within one business day.`
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-white pb-[60px] sm:pb-[80px] lg:pb-[100px]">
      <Container>
        <div className="bg-background p-[30px] sm:p-[45px] md:p-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-5 max-w-[480px]">
              <h2 className="font-heading leading-[35px] md:text-[32px] text-[28px]  text-primary mb-[24px]">
                Let’s discuss your coverage needs.
              </h2>
              <p className="mt-[16px] sm:mt-[22px] text-base md:text-[20px] text-primary">
                Fill out the form to get personalized advice from your local
                Farmers agent.
              </p>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 w-full max-w-[680px]">
              <form onSubmit={handleSubmit} className="space-y-[16px]">
                {/* Row 1: Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    aria-label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-[52px] sm:h-[56px] bg-white text-black px-[20px] text-base placeholder:text-accent outline-none rounded-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                {/* Row 2: E-mail & Phone number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      aria-label="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-[52px] sm:h-[56px] bg-white text-black px-[20px] text-base placeholder:text-accent outline-none rounded-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      aria-label="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-[52px] sm:h-[56px] bg-white text-black px-[20px] text-base placeholder:text-accent outline-none rounded-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full h-[160px] sm:h-[180px] bg-white text-black p-[20px] text-base placeholder:text-accent outline-none rounded-none resize-none focus:ring-1 focus:ring-secondary"
                  />
                </div>

                {/* Row 4: Submit Button */}
                <div className="pt-[10px]">
                  <button
                    type="submit"
                    className="w-[145px] sm:w-[155px] h-[48px] sm:h-[50px] border border-secondary bg-transparent hover:bg-secondary hover:text-white text-black text-base font-normal rounded-none transition-colors duration-200 cursor-pointer flex items-center justify-center"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

