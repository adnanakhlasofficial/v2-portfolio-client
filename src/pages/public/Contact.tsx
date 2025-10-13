import ContactForm from '@/components/forms/public/ContactForm';
import { CopyButton } from '@/components/shared/CopyButton';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { contactLinks } from '@/constants/ContactLinks';
import { socialLinks } from '@/constants/SocialLinks';

export default function Contact() {
  return (
    <Section>
      <SectionTitle
        header="Let's Connect"
        title="Get in Touch"
        summary="Whether you're a recruiter, collaborator, or fellow dev, I'd love to hear from you. Let's build something great together."
      />
      <div className="relative">
        {/* Top-left gradient */}
        <div className="from-primary/30 absolute -top-10 -left-30 h-[600px] w-[600px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />

        {/* Bottom-right gradient */}
        <div className="from-chart-4/30 absolute -right-30 -bottom-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tl to-transparent blur-3xl" />

        <div className="overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-xl">
          <div className="relative z-50 grid gap-8 p-8 lg:grid-cols-2 2xl:gap-12 2xl:p-12">
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="space-y-4">
                  {contactLinks.map((item) => (
                    <Card
                      key={item.label}
                      className="p-0 transition-all hover:scale-105 hover:shadow-lg"
                    >
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-muted-foreground text-sm font-medium">{item.label}</p>
                          {item.href ? (
                            <span className="flex items-center gap-2">
                              <a
                                target="_blank"
                                href={item.href}
                                className="text-foreground text-base font-semibold text-nowrap break-all hover:underline"
                              >
                                {item.value}
                              </a>
                              {(item.label === 'Email' || item.label === 'Phone') && (
                                <CopyButton value={item.value} label={item.label} />
                              )}
                            </span>
                          ) : (
                            <p className="text-foreground text-base font-semibold break-all">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="animate-fade-in-up flex items-center justify-start gap-6 delay-700">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="bg-muted hover:bg-accent border-border hover:border-primary text-muted-foreground group hover:text-primary flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
                      aria-label={label}
                      target="_blank"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="bg-card border-border text-primary invisible absolute bottom-full mb-4 rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
