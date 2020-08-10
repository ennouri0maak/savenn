import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../styles.css"
const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4 x">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">why GoMyFund</h5>
                        <p className="tof1">
                            Des millions de gens ont déjà récolté plus de 5 $ milliards.
                             La réussite et la sécurité des utilisateurs sont notre priorité.
                              Nous sommes fiers d'être les meilleurs en termes de fiabilité, d'assistance et d'innovation.
            </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="http://localhost:3001/" title="you can here know more about coronavirus cases" >What about Corona?</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/contact">contact us</a>
                            </li>
                           
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a className="copy" > Med Amine Ennouri </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;