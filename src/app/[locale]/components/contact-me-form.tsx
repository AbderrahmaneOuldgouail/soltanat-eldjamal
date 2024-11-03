"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "next-intl";

export function ContactMeForm({
  trans,
  type,
}: {
  trans: Record<string, string>;
  type: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .send(
        "service_8gsjp0q",
        "template_5ctjbao",
        {
          locale,
          type: type,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "lIYPpKH9IVwtklCcn",
        }
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setIsLoading(false);
          toast.success(trans.success);
        },
        (reason) => {
          if (
            process.env.NODE_ENV === "development" ||
            process.env.NODE_ENV === "test"
          ) {
            console.log("Failed", reason);
          }
          toast.error(trans.error);
          setIsLoading(false);
        }
      );
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <Input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder={trans.name}
      />
      <Input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder={trans.email}
      />
      <Textarea
        name="message"
        onChange={handleChange}
        placeholder={trans.message}
      />
      <Button type="submit" disabled={isLoading}>
        {trans.sendMessage}
      </Button>
    </form>
  );
}
