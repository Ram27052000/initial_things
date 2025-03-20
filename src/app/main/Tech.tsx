import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ChevronRight, Github, Laptop} from "lucide-react";

export default function Tech() {
   return(
    <section className="py-12 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8">Skills & Tech Stack</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Laptop className="h-5 w-5"/>
                        Frontend
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Angular</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>React</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>SAP UI5 & Fiori</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Laptop className="h-5 w-5"/>
                        Backend
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Spring Boot</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Firebase</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>SQL</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Github className="h-5 w-5"/>
                        DevOps & Cloud
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Git</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Gitlab</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>AWS</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Docker</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Kubernetes</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary"/>
                            <span>Terraform</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </section>
   )
}