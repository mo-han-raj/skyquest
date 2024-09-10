'use client'
import React from "react";
import { MailIcon, HomeIcon, SmartphoneIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add logic here to send data to Google Sheets or another service
  };

  return (
    <section>
      <div className="container mx-auto">
        
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Locate Us
            </div>
            <h1 className="h1 max-w-md mb-8 text-light">For Enquiry on Tours</h1>
            <p className="subtitle max-w-[400px]">
              You can Reach us through phone, social media, or visit our office!
            </p>
            <div className="flex items-center gap-x-8 mb-2">
              <MailIcon size={20} className="text-primary" />
              <div>arcticskyquest@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8 mb-2">
              <HomeIcon size={20} className="text-primary" />
              <div>Via Roma 7, 00159 Roma</div>
            </div>
            <div className="flex items-center gap-x-8">
              <SmartphoneIcon size={20} className="text-primary" />
              <div>+39 347 153 0558</div>
            </div>
          </div>

          <div className="hidden md:flex w-full bg-contactlight dark:bg-contactdark bg-contain bg-top bg-no-repeat"></div>
        </div>
              {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="question-1">
              <AccordionTrigger>How long does the Aurora Tour take?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The duration of our Aurora Hunt depends on the distance we need to travel to find clear skies and how long we may need to wait for the Northern Lights. Sometimes it may take just 30 minutes, while other times it could take up to 4 hours. This is why the total length of the tour can vary between 5 and 12 hours.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
              <AccordionTrigger>What should I bring with me?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Our Aurora Tour is solely dedicated to hunting the Northern Lights, so we don’t include food or drinks. However, you’re welcome to bring your own snacks and beverages, as we might be outside for a significant amount of time. 
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
              <AccordionTrigger>Are there any age restrictions?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Please note that children must be at least 10 years old to join the tour.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <div className="pt-16 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Enquire Now</h2>
          <form
            className="w-full max-w-lg p-4 bg-white/10 backdrop-blur-sm dark:bg-black/10 dark:backdrop-blur-sm shadow-input rounded-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+39 347 153 0558" type="tel" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="participants">Number of Participants</Label>
              <select
                id="participants"
                className="border rounded-md p-2 w-full bg-transparent  text-grey dark:text-white"
              >
                {Array.from({ length: 16 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={4}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <div className="flex flex-row content-center">
              <div><Input id="terms" type="checkbox" placeholder="Agree to terms and conditions"/></div>
              <div className="pl-3 mt-2 text-sm font-light text-grey/100">Agree to terms and conditions<a className="text-grey hover:text-green0"href="/booking"> T&C</a></div>
             
             </div>
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-green-400 dark:from-grey-400  to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--white-800)_inset,0px_-1px_0px_0px_var(--white-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
              
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
