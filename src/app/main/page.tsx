import Header from './Header'
import Content from './Content'

export default function Home() {
    return (
        <div className="grid gap-8">
            <Header></Header>
            <div className= "ml-5 mt-5">
                <Content></Content>
            </div>
        </div>
    );
}
