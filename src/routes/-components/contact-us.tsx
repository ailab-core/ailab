import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Field } from "@/components/ui/field"

export default function ContactUs() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-0">
      <div className="flex flex-col gap-8">
        <SplitText
          text={"Get In Touch"}
          className="text-4xl md:text-6xl font-black uppercase"
          delay={20}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <SplitText
          text={"If you have any questions about our products or services, please fill out the form and we will get back to you shortly."}
          className="text-lg text-muted-foreground"
          delay={10}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
      <AnimatedContent
        direction="horizontal"
        distance={-50}
        duration={2}
      >
        <Card>
          <CardContent className="flex flex-col gap-6">
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </Field>
            <Field>
              <Label htmlFor="organizationName">Organization</Label>
              <Input id="organizationName" placeholder="Organization name" />
            </Field>
            <Field>
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" placeholder="Email address" type="email" />
            </Field>
            <Field>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" placeholder="Phone number" type="phoneNumber" />
            </Field>
            <Field>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={6}
              />
            </Field>
            <Button className="hover:bg-sky-300" size="lg">
              {"Let's talk"}
            </Button>
          </CardContent>
        </Card>
      </AnimatedContent>
    </div>
  )
}
