
import Welcome from "@/components/Welcome/Welcome";
import Header from "@/components/Header/Header";
import MyStack from "@/components/MyStack/MyStack";
import Footer from "@/components/Footer/Footer";
import {Flex} from "@mantine/core";


export default function HomePage() {


  return (
      <>
          <Flex gap={30} direction={'column'}>
              <header>
                  <Header/>
              </header>

              <main style={{
                  display: "flex",
                  flexDirection: 'column',
                  gap:100
              }}>
                  <Welcome/>
                  <MyStack/>
              </main>
              <footer><Footer/></footer>
          </Flex>

      </>
  );
}
