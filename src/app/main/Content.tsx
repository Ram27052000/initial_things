import {Badge} from "@/components/ui/badge";
import {Briefcase, MapPin} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Content() {
    return (
        <main>
            <section className="py-12 md:py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="space-y-4">
                        <h1 className='text-4xl font-bold tracking-tight'>Hi, I'm R.V. Ram</h1>
                        <p className="text-xl text-gray-500">
                            Software Developer with 3 years of experience in Angular,
                            React,SAP UI5, Spring Boot and more...
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <Badge className="bg-blue-500 rounded px-3 py-1 text-white">Angular</Badge>
                            <Badge className="bg-blue-500 rounded px-3 py-1 text-white">React</Badge>
                            <Badge className="bg-blue-500 rounded px-3 py-1 text-white">SAP UI5</Badge>
                            <Badge className="bg-blue-500 rounded px-3 py-1 text-white">Springboot</Badge>
                            <Badge className="bg-blue-500 rounded px-3 py-1 text-white">GIT</Badge>
                            <Badge className="bg-blue-500 rounded px-3 py-1 text-white">GITLAB</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <MapPin className="h-4 w-4"/>
                            <span>Chennai, TamilNadu</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Briefcase className="h-4 w-4"/>
                            <span>Software Developer at Flender</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Avatar className="h-68 w-68">
                            <AvatarImage src="./ram.jpg" alt="R.V. Ram"/>
                            <AvatarFallback className="text-5xl">RV</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </section>
        </main>
    );
}