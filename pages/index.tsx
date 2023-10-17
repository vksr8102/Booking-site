import Block1 from "../src/content/Home/Block1"
import Block2 from "../src/content/Home/Block2"
import Block3 from "../src/content/Home/Block3"
import Block4 from "../src/content/Home/Block4"
import Block5 from "../src/content/Home/Block5"

export default function Home() {
  return (
    <>
      <div className="w-[100%] flex flex-col md:mt-[90px] mt-[45px]">
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        <Block5/> 
      </div>
    </>
  )
}
