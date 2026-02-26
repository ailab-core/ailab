import {
  Button,
  Input,
  Textarea,
  Field,
  FieldLabel,
} from "@/components/ui"

export default function ContactUs() {
  return (
    <div className="container md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-0">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl md:text-5xl font-bold">
          {"Get In Touch"}
        </h2>
        <h3 className="text-lg text-muted-foreground">
          {"If you have any questions about our products or services, please fill out the form and we will get back to you shortly."}
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" placeholder="Your name" />
        </Field>
        <Field>
          <FieldLabel htmlFor="organizationName">Organization</FieldLabel>
          <Input id="organizationName" placeholder="Organization name" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">E-Mail</FieldLabel>
          <Input id="email" placeholder="Email address" type="email" />
        </Field>
        <Field>
          <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
          <Input id="phoneNumber" placeholder="Phone number" type="phoneNumber" />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={6}
          />
        </Field>
        <Button size="lg">
          {"Let's talk"}
        </Button>
      </div>
    </div>
  )
}
