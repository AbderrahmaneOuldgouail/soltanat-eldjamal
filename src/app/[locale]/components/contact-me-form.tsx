"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "next-intl";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  const [errors, setErrors] = useState({
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
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if (!formData.name.trim()) {
      newErrors.name = trans.required;
    } else if (formData.name.length > 30 || !nameRegex.test(formData.name)) {
      newErrors.name = trans.nameError;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!formData.email.trim()) {
      newErrors.email = trans.required;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = trans.emailError;
    }

    const messageRegex = /^[a-zA-Z0-9\s.,?!@#%&*()-]+$/;
    if (!formData.message.trim()) {
      newErrors.message = trans.required;
    } else if (!messageRegex.test(formData.message)) {
      newErrors.message = trans.messageError;
    }
    setErrors(newErrors);
    return (
      newErrors.name == "" && newErrors.email == "" && newErrors.message == ""
    );
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    setIsLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          locale,
          type: type,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: publicKey,
        }
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setIsLoading(false);
          toast.success(trans.success);
        },
        (reason) => {
          toast.error(trans.error);
          setIsLoading(false);
        }
      );
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <Popover open={errors.name != "" ? true : false}>
        <PopoverTrigger className="w-full"></PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={-30}
          className="bg-destructive text-destructive-foreground text-sm p-2 opacity-80"
        >
          <div className="text-sm"></div>
          {errors.name}
        </PopoverContent>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder={trans.name}
        />
      </Popover>

      <Popover open={errors.email != "" ? true : false}>
        <PopoverTrigger className="w-full"></PopoverTrigger>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder={trans.email}
        />
        <PopoverContent
          side="top"
          align="end"
          sideOffset={-30}
          className=" bg-destructive text-destructive-foreground text-sm p-2 opacity-80"
        >
          <div className="text-sm"></div>
          {errors.email}
        </PopoverContent>
      </Popover>

      <Popover open={errors.message != "" ? true : false}>
        <PopoverTrigger className="w-full"></PopoverTrigger>
        <Textarea
          name="message"
          onChange={handleChange}
          placeholder={trans.message}
        />
        <PopoverContent
          side="top"
          align="end"
          sideOffset={-30}
          className="bg-destructive text-destructive-foreground text-sm p-2 opacity-80"
        >
          <div className="text-sm"></div>
          {errors.message}
        </PopoverContent>
      </Popover>

      <Button type="submit" disabled={isLoading}>
        {trans.sendMessage}
      </Button>
    </form>
  );
}
