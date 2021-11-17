import './CardProfile.css';

export default function CardProfile({ nama, nim, univ, photo_url, github_link, onClick }) {
  return (
    <div className="cardProf">
      <div className="cardChild" onClick={onClick}>
        <img src={photo_url} alt="" className="photoProfile" />
        <div className="descriptionProfile">
          <div>
            <p id="titleProfile">{nama}</p>
            <p id="nimProfile">{nim}</p>
            <p id="univProfile">{univ}</p>
          </div>
        </div>
      </div>
      <a href={github_link} class="button" className="buttonGit">
        <p>
            GitHub
        </p>
      </a>
    </div>
  );
}
