import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>

        <footer className="App-footer text-center">
          <div className="container">
            <p>
              © 2025 Annx_C - All rights reserved. | Open Source:{" "}
              <a
                href="https://github.com/annx-c/dictionary_project"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </p>
            <div className="d-flex justify-content-center gap-5 mt-4">
              <a href="https://github.com/annx-c" target="_blank" rel="noreferrer">
                <i class="fab fa-github "></i>
              </a>
              <a
                href="mailto:canete.ana13@gmail.com"
                target="_blank" rel="noreferrer"
              >
                <i class="fa-solid fa-envelope "></i>
              </a>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF98MoxK_9AWgAAAZU0TSGosFfVhT9rhJ_G8JPYCZD5SlB1ekKiWiW_yHJr9FJ_hkMJxficMirJdT7alkqOkMlDrafjNZUqa7E1SOjpOTTLfAnHCC_w2kczHYdDKyifEgGah-A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fana-ca%25C3%25B1ete-815892280%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
                target="_blank" rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin "></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
