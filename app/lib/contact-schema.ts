import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres e-mail"),
  phone: z.string().optional(),
  postalCode: z.string().optional(),
  category: z.string().min(1, "Wybierz kategorię zapytania"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  privacy: z.literal(true, {
    message: "Musisz zaakceptować Politykę Prywatności",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
