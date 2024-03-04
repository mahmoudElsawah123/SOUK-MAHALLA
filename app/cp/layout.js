"use client"

import { Container } from "react-bootstrap"
import ControlNav from "../components/FooterBar/ControlNav"

export default function DashboardLayout({children}) {
    return (
      <Container>
        <div className="row">
            <div className="col-12 col-md-4" >
            <ControlNav/>
            </div>
            <div className="col-12 col-md-8">{children}</div>

        </div>
      </Container>
     
    )
  }