
import WelcomeMain from "@/components/Welcome/Welcome.main";
import Header from "@/components/Header/Header";
import MyStackMain from "@/components/MyStack/MyStack.main";
import FooterMain from "@/components/Footer/Footer.main";

export default function HomePage() {


  return (
      <>
          <header>
                  <Header/>
          </header>

          <main >
              <WelcomeMain/>
              <MyStackMain/>
          </main>
          <footer><FooterMain/></footer>
      </>
  );
}
