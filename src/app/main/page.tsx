import Header from './Header'
import Content from './Content'
import About from "./About";
import Tech from "./Tech";
export default function Home() {
    return (
        <div className="grid gap-8">
            <Header></Header>
            <div className="ml-5 mt-5">
                <Content></Content>
                <About></About>
                <Tech></Tech>
            </div>
        </div>
    );
}
