import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  artType: z.string().min(1, "Please select your art type"),
  projectDescription: z.string().trim().min(10, "Please tell us a bit more (at least 10 characters)").max(1000, "Description must be less than 1000 characters"),
  currentPresence: z.string().trim().max(255, "URL must be less than 255 characters").optional().or(z.literal("")),
  timeline: z.string().min(1, "Please select a timeline"),
  budgetRange: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formspreeState, handleFormspreeSubmit] = useFormspree("xeopygbw");
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      artType: "",
      projectDescription: "",
      currentPresence: "",
      timeline: "",
      budgetRange: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    await handleFormspreeSubmit(data);
  };

  const handleReset = () => {
    form.reset();
  };

  if (formspreeState.succeeded) {
    return (
      <Card className="border-primary/20 shadow-lg">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 mx-auto text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Thank you! We've received your project details
            </h3>
            <p className="text-muted-foreground font-body">
              We'll review your information and get back to you within 1-2 business days.
            </p>
            <Button onClick={handleReset} variant="warm" className="mt-4">
              Submit Another Project
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-display text-3xl">About You</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      disabled={formspreeState.submitting}
                    />
                  </FormControl>
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field}
                      disabled={formspreeState.submitting}
                    />
                  </FormControl>
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe Your Project</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What type of art do you create?..."
                      rows={4}
                      {...field}
                      disabled={formspreeState.submitting}
                    />
                  </FormControl>
                  <ValidationError prefix="Project Description" field="projectDescription" errors={formspreeState.errors} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentPresence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have a website or social media? (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://instagram.com/yourart or www.yourwebsite.com" 
                      {...field}
                      disabled={formspreeState.submitting}
                    />
                  </FormControl>
                  <ValidationError prefix="Current Presence" field="currentPresence" errors={formspreeState.errors} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>When would you like to launch?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                      disabled={formspreeState.submitting}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap" className="font-normal cursor-pointer">ASAP</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-2-months" id="1-2-months" />
                        <Label htmlFor="1-2-months" className="font-normal cursor-pointer">Within 1-2 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exploring" id="exploring" />
                        <Label htmlFor="exploring" className="font-normal cursor-pointer">Just exploring</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-rush" id="no-rush" />
                        <Label htmlFor="no-rush" className="font-normal cursor-pointer">No rush</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <ValidationError prefix="Timeline" field="timeline" errors={formspreeState.errors} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your budget range? (Optional)</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={formspreeState.submitting}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500-$1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000-$2,000</SelectItem>
                      <SelectItem value="2000-plus">$2,000+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                  <ValidationError prefix="Budget Range" field="budgetRange" errors={formspreeState.errors} />
                  <FormMessage />
                </FormItem>
              )}
            />

            {formspreeState.errors && (
              <div className="text-destructive text-sm">
                There was an error submitting your form. Please try again.
              </div>
            )}

            <Button 
              type="submit" 
              variant="warm" 
              size="lg" 
              className="w-full"
              disabled={formspreeState.submitting}
            >
              {formspreeState.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Your Project Details"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
