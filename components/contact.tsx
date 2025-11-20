"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "917039185207"; // WhatsApp number (country code + number, no +)
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            <span className="text-green-400">READY </span>
            TO TAKE YOUR IDEA
            <br />
            TO NEXT LEVEL?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">Sandeeppandey70391@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">(+91) 7039185207</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Mumbai, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sandeep-pandey70391/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com/Mrsandeep27" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form className="space-y-6" onSubmit={handleWhatsApp}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Name</label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}