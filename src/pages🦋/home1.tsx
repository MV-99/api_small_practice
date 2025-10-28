import "../styles🌈/home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="texto-esquina">Kat</h3>
      {/*ahora la parte de texto e imagen*/}
      <div style={{ display: "flex", flexDirection: "row", gap: "550px" }}>
        {/*ahora la parte del texto y boton*/}
        <div className="texto-boton">
          <h1>Hi,</h1>
          <h1 style={{ marginTop: "-10px" }}>
            I'm{" "}
            <a
              style={{
                color: "#575FB5",
                fontWeight: "bold",
                fontSize: "95px",
                textAlign: "center",
                userSelect: "none",
                transition: "transform 0.3s ease, text-shadow 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(2.05)";
                e.currentTarget.style.textShadow =
                  "0 0 50px rgba(247, 17, 255, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              Kat
            </a>
            ,
          </h1>
          <h1 style={{ marginTop: "-10px" }}>fronted intern</h1>
          <button onClick={() => navigate("/contenedor")} className="boton">
            Watch Api Job
          </button>
          {/*fila de iconos pequeños */}
          <div className="iconos">
            <GitHubIcon
              style={{ fontSize: "30px", color: "white" }}
              onClick={() => window.open("https://github.com/MV-99", "_blank")}
            />
            <EmailIcon
              style={{ fontSize: "30px", color: "white" }}
              onClick={() =>
                (window.location.href = "mailto:maribithvallecillo@gmail.com")
              }
            />
            <YouTubeIcon
              style={{ fontSize: "35px", color: "white" }}
              onClick={() =>
                window.open("https://www.youtube.com/@LanaDelRey", "_blank")
              }
            />
            <PinterestIcon style={{ fontSize: "30px", color: "white" }} />
          </div>
        </div>
        {/*foto*/}
        <img src="1.png" alt="kat" />
      </div>
    </div>
  );
}
