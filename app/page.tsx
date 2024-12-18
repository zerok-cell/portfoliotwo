
import WelcomeMain from "@/components/Welcome/Welcome.main";
import Header from "@/components/Header/Header";

export default function HomePage() {


  return (
      <>
          <header><Header/></header>

          <main style={{
              background: 'black'
          }}>
              <WelcomeMain/>
          </main>
      </>
  );
}
