import Header from "../components/Header";
import MsgErreur from "../components/MsgErreur";

function Erreur() {
  return (
    <div>
      <Header>
        <h1 className="header__title">Cette page n'existe pas</h1>
      </Header>
      <MsgErreur />
    </div>
  );
}

export default Erreur;
