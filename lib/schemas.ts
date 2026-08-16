import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  workEmail: z.string().email("Invalid email address"),
  company: z.string().optional(),
  countryRegion: z.string().min(1, "Country/Region is required"),
  helpTopic: z.string().min(1, "Help topic is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const articleSchema = z.object({
  titleEn: z.string().min(1, "English title is required"),
  titleFr: z.string().min(1, "French title is required"),
  contentEn: z.string().min(1, "English content is required"),
  contentFr: z.string().min(1, "French content is required"),
  published: z.boolean(),
  imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export type ArticleFormData = z.infer<typeof articleSchema>;
