import React from "react";
import { Link } from "react-router-dom";

function Universe() {
    return (
        <div className="container mt-5 pt-5">

            {/* Heading */}
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
            </div>

            {/* Cards */}
            <div className="row">

                <div className="col-md-4 p-3 mt-5 text-center">
                    <img
                        src="media/images/zerodhaFundhouse.png"
                        className="company-logo"
                        alt="Zerodha Fund House"
                    />
                    <p className="text-small text-muted">
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-md-4 p-3 mt-5 text-center">
                    <img
                        src="media/images/sensibullLogo.svg"
                        className="company-logo"
                        alt="Sensibull"
                    />
                    <p className="text-small text-muted">
                        Options trading platform that lets you create strategies, analyze
                        positions, and examine data points like open interest, FII/DII,
                        and more.
                    </p>
                </div>

                <div className="col-md-4 p-3 mt-5 text-center">
                    <img
                        src="media/images/tijori.svg"
                        className="company-logo"
                        alt="Tijori"
                    />
                    <p className="text-small text-muted">
                        Investment research platform that offers detailed insights on
                        stocks, sectors, supply chains, and more.
                    </p>
                </div>

                <div className="col-md-4 p-3 mt-5 text-center">
                    <img
                        src="media/images/StreakLogo.png"
                        className="company-logo"
                        alt="Streak"
                    />
                    <p className="text-small text-muted">
                        Systematic trading platform that allows you to create and
                        backtest strategies without coding.
                    </p>
                </div>

                <div className="col-md-4 p-3 mt-5 text-center">
                    <img
                        src="media/images/SmallCaseLogo.png"
                        className="company-logo"
                        alt="Smallcase"
                    />
                    <p className="text-small text-muted">
                        Thematic investment platform that helps you invest in curated
                        portfolios of stocks and ETFs.
                    </p>
                </div>

                <div className="col-md-4 p-3 mt-5 text-center">
                    <img
                        src="media/images/DittoLogo.png"
                        className="company-logo"
                        alt="Ditto"
                    />
                    <p className="text-small text-muted">
                        Personalized advice on life and health insurance. No spam and
                        no mis-selling.
                    </p>
                </div>

            </div>

            <div className="text-center mt-5 mb-5">
                <Link
                    to="/signup"
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Sign up Now
                </Link>
            </div>

        </div>
    );
}

export default Universe;