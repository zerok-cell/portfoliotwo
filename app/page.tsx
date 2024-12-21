//
// import WelcomeMain from "@/components/Welcome/Welcome.main";
// import Header from "@/components/Header/Header";
// import MyStackMain from "@/components/MyStack/MyStack.main";
// import FooterMain from "@/components/Footer/Footer.main";
//
import {lazy, memo, Suspense} from "react";

const WelcomeMain = lazy(() => import('@/components/Welcome/Welcome.main'));

const Header = lazy(() => import('@/components/Header/Header'));

const MyStackMain = lazy(() => import('@/components/MyStack/MyStack.main'));

const FooterMain = lazy(() => import('@/components/Footer/Footer.main'));


// Memoize the components

const MemoizedWelcomeMain = memo(WelcomeMain);

const MemoizedHeader = memo(Header);

const MemoizedMyStackMain = memo(MyStackMain);

const MemoizedFooterMain = memo(FooterMain);


export default function HomePage() {


  return (
      <>
          <header>
              <Suspense fallback={<div>Loading Header...</div>}>

                  <MemoizedHeader />

              </Suspense>
          </header>

          <main >
              <Suspense fallback={<div>Loading Welcome...</div>}>

                  <MemoizedWelcomeMain />

              </Suspense>
              <Suspense fallback={<div>Loading My Stack...</div>}>

                  <MemoizedMyStackMain />

              </Suspense>
          </main>
          <footer>  <Suspense fallback={<div>Loading Footer...</div>}>

              <MemoizedFooterMain />

          </Suspense></footer>
      </>
  );
}
