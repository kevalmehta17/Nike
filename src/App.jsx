<<<<<<< HEAD
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Components";
const App = () => (
  <main className="relative">
    {/* <Nav /> */}
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <specialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black text-white padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
=======
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
>>>>>>> 95f97cc (Initial commit)
