import {Code2, Github} from "lucide-react"
import { Button } from "@/components/ui/button"
export default function Header() {
    return (
        <div>
            <header>
                <div className="container flex justify-between">
                    <div className="flex items-center gap-2 font-bold">
                        <Code2 className="h-5 w-5"/>
                        <span>R.V. Ram</span>
                    </div>
                    {/*<nav className="flex items-center gap-6">*/}
                    {/*    <a href className="text-sm font-medium cursor-pointer hover:text-blue-500">About</a>*/}
                    {/*    <a href className="text-sm font-medium cursor-pointer hover:text-blue-500">Skills</a>*/}
                    {/*    <a href className="text-sm font-medium cursor-pointer hover:text-blue-500">Projects</a>*/}
                    {/*</nav>*/}
                    <div className="flex-items-center">
                        <a href="https://github.com/Ram27052000" target="_blank">
                            <Button variant="ghost" size="icon" className="cursor-pointer hover:text-blue-500">
                                <Github className="h-5 w-5"/>
                            </Button>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}