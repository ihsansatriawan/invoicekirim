import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        <h1>Test Scroll</h1>
        <div id="fitur" style={{ marginTop: '100vh' }}>Fitur Section</div>
      </div>
    </main>
  );
}
