import {Card, CardContent} from "@/components/ui/card";

export default function About() {
    return (
            <section className="py-12 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <Card>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <p>
                                I'm a 24-year-old Software Developer based in Chennai, Tamil Nadu, with 3 years
                                months of
                                experience in software development. I currently work at Flender, where I develop
                                applications using
                                Angular, Spring Boot, and various other technologies.
                            </p>
                            <p>
                                My technical expertise spans across frontend and backend development, with proficiency
                                in Angular,
                                Spring Boot, Power Apps, Power Automate, Python, PowerShell, SQL, and CI/CD pipelines.
                                I'm passionate
                                about creating efficient, user-friendly applications and continuously expanding my
                                knowledge in the
                                ever-evolving tech landscape.
                            </p>
                            <p>
                                When I'm not coding, you can find me practicing calisthenics, playing chess, or working
                                on improving
                                my English vocabulary. I'm also keen on contributing to open-source projects,
                                particularly in the
                                Angular and Spring Boot ecosystems.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>
    )
}