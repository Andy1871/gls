"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  "bot-field": string;
};

// Options for the "What are you enquiring about?" dropdown
const enquiryTypes = ["Pilates", "Online Coaching", "Pilates & Online Coaching", "General Enquiry"];

const inputClass =
  "w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 placeholder:text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0";

// The enquiry form itself (fields, validation, submit), shared by the
// ContactForm banner and the contact page. Anything passed as children
// is shown above the fields.
export default function EnquiryForm({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  // Netlify Forms: post to the static copy of this form in public/__forms.html
  // (Netlify can't receive posts to pages rendered by Next.js)
  async function onSubmit(data: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "enquiry",
          // Netlify uses a field called "subject" as the notification email's subject line.
          // It escapes "&" to "&amp;" there, so write "and" instead
          subject: `GLS Form Submission - ${data.name} ${data.surname}, ${data.enquiryType}`.replaceAll(
            "&",
            "and",
          ),
          ...data,
        }).toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="enquiry"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={className}
    >
      {children}

      {/* Honeypot: hidden from people, bots fill it in and Netlify drops the submission */}
      <p className="hidden" aria-hidden>
        <label>
          Don&rsquo;t fill this out: <input tabIndex={-1} autoComplete="off" {...register("bot-field")} />
        </label>
      </p>

      <div className="flex flex-1 flex-col space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Name</span>
            <input
              placeholder="Name"
              className={inputClass}
              {...register("name", { required: "Please enter your name" })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </label>
          <label className="block">
            <span className="sr-only">Surname</span>
            <input
              placeholder="Surname"
              className={inputClass}
              {...register("surname", {
                required: "Please enter your surname",
              })}
            />
            {errors.surname && (
              <p className="mt-1 text-xs text-red-600">
                {errors.surname.message}
              </p>
            )}
          </label>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              placeholder="Email"
              className={inputClass}
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </label>

          <label className="block">
            <span className="sr-only">Phone number (optional)</span>
            <input
              type="tel"
              placeholder="Phone number (optional)"
              className={inputClass}
              {...register("phone")}
            />
          </label>
        </div>

        <label className="block">
          <span className="sr-only">What are you enquiring about?</span>
          <div className="relative">
            <select
              defaultValue=""
              className={`${inputClass} cursor-pointer appearance-none pr-8`}
              {...register("enquiryType", {
                required: "Please choose what you're enquiring about",
              })}
            >
              <option value="" disabled>
                What are you enquiring about?
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {/* Custom arrow, since appearance-none hides the browser's own */}
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="currentColor"
              className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {errors.enquiryType && (
            <p className="mt-1 text-xs text-red-600">
              {errors.enquiryType.message}
            </p>
          )}
        </label>

        <label className="flex flex-1 flex-col">
          <span className="sr-only">Message</span>
          <textarea
            placeholder="Message"
            className={`${inputClass} min-h-40 flex-1 resize-none`}
            {...register("message", { required: "Please enter a message" })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">
              {errors.message.message}
            </p>
          )}
        </label>
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
        <p aria-live="polite" className="self-stretch text-left text-sm">
          {status === "sent" &&
            "Thank you, your message has been sent. I’ll be in touch within a couple of days."}
          {status === "error" && (
            <span className="text-red-600">
              Sorry, something went wrong. Please try again, or message me on
              Instagram.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
