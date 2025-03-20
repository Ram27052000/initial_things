import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ChevronRight} from "lucide-react";

export default function Projects() {

    return (
        <section id="projects" className="py-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle> Flender Regulation Search Project</CardTitle>
                        <CardDescription>Angular,Spring Boot,Postgresql</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">The Flender Regulation Search project is a system designed to store,
                            retrieve, bookmark, and manage documents based on user roles.
                            It is widely used in India and Germany by the quality department at Flender</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-primary"/>
                                <span>Manage templates efficiently with upload, delete, download, and filter options.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-primary"/>
                                <span>Role-based document management</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-primary"/>
                                <span>Document download functionality</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-primary"/>
                                <span>Read and share permissions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-primary"/>
                                <span>Archiving system with database integration</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}