import ContactForm from '@/components/forms/public/ContactForm';
import { CopyButton } from '@/components/shared/CopyButton';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { contactLinks } from '@/constants/ContactLinks';
import { socialLinks } from '@/constants/SocialLinks';
import Link from 'next/link';

export default function Contact() {
  return (
    <Section>
      <SectionTitle
        header="Let's Connect"
        title="Get in Touch"
        summary="Whether you're a recruiter, collaborator, or fellow dev, I'd love to hear from you. Let's build something great together."
      />

      <div className="relative overflow-hidden rounded-2xl">
        {/* Top-left gradient */}
        <div className="from-primary/20 absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-gradient-to-br to-transparent blur-2xl sm:h-[500px] sm:w-[500px]" />

        {/* Bottom-right gradient */}
        <div className="from-chart-4/20 absolute -right-32 -bottom-32 h-[300px] w-[300px] rounded-full bg-gradient-to-tl to-transparent blur-2xl sm:h-[500px] sm:w-[500px]" />

        <div className="overflow-hidden rounded-2xl border shadow-xl backdrop-blur-xl">
          <div className="xs:p-4 relative z-50 grid gap-4 p-3 sm:gap-6 sm:p-6 lg:grid-cols-2 2xl:gap-12 2xl:p-12">
            {/* LEFT SECTION */}
            <div className="flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-5">
                {/* CONTACT LINKS */}
                <div className="space-y-2 sm:space-y-4">
                  {contactLinks.map((item) => (
                    <Card
                      key={item.label}
                      className="p-0 transition-all hover:scale-[1.02] hover:shadow-md"
                    >
                      <CardContent className="flex flex-col items-start gap-2.5 p-3 sm:gap-4 sm:p-5 md:flex-row">
                        {/* ICON */}
                        <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-md sm:h-10 sm:w-10">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>

                        {/* TEXT */}
                        <div className="min-w-0">
                          <p className="text-muted-foreground text-[11px] font-medium sm:text-sm">
                            {item.label}
                          </p>

                          {item.href ? (
                            item.href === '/chat' ? (
                              <span className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                                <Link
                                  href={item.href}
                                  className="text-foreground text-base font-semibold break-all hover:underline sm:text-base"
                                >
                                  {item.value}
                                </Link>
                                {(item.label === 'Email' || item.label === 'Phone') && (
                                  <CopyButton value={item.value} label={item.label} />
                                )}
                              </span>
                            ) : (
                              <span className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                                <a
                                  href={item.href}
                                  target="_blank"
                                  className="text-foreground text-base font-semibold break-all hover:underline sm:text-base"
                                >
                                  {item.value}
                                </a>
                                {(item.label === 'Email' || item.label === 'Phone') && (
                                  <CopyButton value={item.value} label={item.label} />
                                )}
                              </span>
                            )
                          ) : (
                            <p className="text-foreground text-base font-semibold break-all sm:text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* SOCIAL ICONS */}
                <div className="animate-fade-in-up flex flex-wrap items-center justify-start gap-3 delay-700 sm:gap-5">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="bg-muted hover:bg-accent border-border hover:border-primary text-muted-foreground group hover:text-primary relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
                      aria-label={label}
                      target="_blank"
                    >
                      <Icon className="!h-6 !w-6" />
                      <span className="bg-background border-border text-primary absolute bottom-full mb-1 hidden rounded-md border px-2 py-0.5 text-[10px] font-medium whitespace-nowrap opacity-0 shadow-md transition-all duration-200 group-hover:block group-hover:opacity-100 sm:mb-3 sm:text-xs">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="mt-4 sm:mt-6 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
