import Main from "@/components/Main";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header title={'Food Manager App'}/>
      <div className="p-4 flex flex-wrap gap-4">
                <div>
                    <Main/>
                </div>
        </div>
        
    </div>
  );
}
