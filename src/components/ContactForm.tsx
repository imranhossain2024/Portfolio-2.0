import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

/**
 * ContactForm Component
 * 
 * To make this form work, follow these steps:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create a Email Service (e.g., Gmail)
 * 3. Create an Email Template with the following placeholders:
 *    - {{user_name}}
 *    - {{user_email}}
 *    - {{subject}}
 *    - {{message}}
 * 4. Add your Service ID, Template ID, and Public Key to your .env file:
 *    VITE_EMAILJS_SERVICE_ID=...
 *    VITE_EMAILJS_TEMPLATE_ID=...
 *    VITE_EMAILJS_PUBLIC_KEY=...
 */

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const formData = new FormData(form.current!);
    
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name.trim()) errors.user_name = 'Name is required';
    if (!email.trim()) {
      errors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.user_email = 'Please enter a valid email';
    }
    if (!subject.trim()) errors.subject = 'Subject is required';
    if (!message.trim()) {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam honeypot check
    const formData = new FormData(form.current!);
    if (formData.get('_gotcha')) {
      console.log('Spam detected');
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setErrorMessage('EmailJS configuration is missing. Please check environment variables.');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          form.current?.reset();
          setFormErrors({});
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setErrorMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl text-center space-y-4"
          >
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-extrabold text-emerald-500">Message Sent Successfully!</h3>
            <p className="text-muted-foreground font-medium">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 rounded-xl"
              onClick={() => setSubmitStatus('idle')}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Honeypot field */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-semibold flex justify-between">
                  Full Name {formErrors.user_name && <span className="text-destructive text-[10px] uppercase">{formErrors.user_name}</span>}
                </label>
                <Input 
                  id="user_name"
                  name="user_name" 
                  placeholder="Imran Hossain" 
                  className={`bg-accent/50 rounded-xl h-12 ${formErrors.user_name ? 'border-destructive/50 ring-destructive/20' : ''}`}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-semibold flex justify-between">
                  Email Address {formErrors.user_email && <span className="text-destructive text-[10px] uppercase">{formErrors.user_email}</span>}
                </label>
                <Input 
                  id="user_email"
                  name="user_email" 
                  placeholder="imran@example.com" 
                  type="email" 
                  className={`bg-accent/50 rounded-xl h-12 ${formErrors.user_email ? 'border-destructive/50 ring-destructive/20' : ''}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold flex justify-between">
                Subject {formErrors.subject && <span className="text-destructive text-[10px] uppercase">{formErrors.subject}</span>}
              </label>
              <Input 
                id="subject"
                name="subject" 
                placeholder="Let's collaborate on a MERN project" 
                className={`bg-accent/50 rounded-xl h-12 ${formErrors.subject ? 'border-destructive/50 ring-destructive/20' : ''}`}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold flex justify-between">
                Message {formErrors.message && <span className="text-destructive text-[10px] uppercase">{formErrors.message}</span>}
              </label>
              <Textarea 
                id="message"
                name="message" 
                placeholder="Tell me about your project..." 
                className={`bg-accent/50 rounded-2xl min-h-[150px] ${formErrors.message ? 'border-destructive/50 ring-destructive/20' : ''}`}
              />
            </div>

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-destructive text-sm font-medium"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p>{errorMessage}</p>
              </motion.div>
            )}

            <Button 
              type="submit" 
              disabled={isSubmitting}
              variant="premium" 
              className="w-full h-14 text-lg rounded-2xl group relative overflow-hidden"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
