/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import Learn from "components/Learn";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Connect" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          This is an Prototype of Frosh created for the ETHernals Hackathon
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg 
      width="38px" 
      height="38px" 
      viewBox="0 0 38 38" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M31.667 22.46v-3.751A4.745 4.745 0 0 0 34.833 14.25c0 -2.619 -2.131 -4.75 -4.75 -4.75a4.734 4.734 0 0 0 -3.35 1.387L20.534 8.407c0.016 -0.163 0.049 -0.323 0.049 -0.491 0 -2.619 -2.131 -4.75 -4.75 -4.75S11.083 5.298 11.083 7.917c0 1.206 0.467 2.297 1.211 3.137L9.644 14.586A4.714 4.714 0 0 0 7.917 14.25c-2.619 0 -4.75 2.131 -4.75 4.75s2.131 4.75 4.75 4.75c0.252 0 0.496 -0.036 0.736 -0.074L11.717 27.759c-0.393 0.69 -0.633 1.476 -0.633 2.324 0 2.619 2.131 4.75 4.75 4.75a4.74 4.74 0 0 0 4.533 -3.409l6.273 -1.254A4.729 4.729 0 0 0 30.083 31.667c2.619 0 4.75 -2.131 4.75 -4.75a4.742 4.742 0 0 0 -3.167 -4.457zM30.083 12.667a1.585 1.585 0 1 1 -1.583 1.583c0 -0.872 0.709 -1.583 1.583 -1.583zm-14.25 -6.333a1.585 1.585 0 1 1 -1.583 1.583c0 -0.872 0.709 -1.583 1.583 -1.583zm-9.5 12.667a1.585 1.585 0 1 1 1.583 1.583c-0.874 0 -1.583 -0.711 -1.583 -1.583zm9.5 12.667a1.583 1.583 0 1 1 0 -3.167 1.583 1.583 0 0 1 0 3.167zm4.372 -3.439A4.758 4.758 0 0 0 15.833 25.333c-0.611 0 -1.191 0.125 -1.727 0.337l-2.65 -3.532C12.2 21.297 12.667 20.206 12.667 19c0 -0.849 -0.241 -1.634 -0.632 -2.323l3.064 -4.085c0.241 0.038 0.483 0.074 0.735 0.074a4.734 4.734 0 0 0 3.35 -1.387l6.199 2.479c-0.016 0.163 -0.049 0.323 -0.049 0.491 0 2.062 1.328 3.802 3.167 4.457v3.751a4.744 4.744 0 0 0 -3.167 4.457c0 0.097 0.024 0.185 0.028 0.28l-5.157 1.032zM30.083 28.5a1.583 1.583 0 1 1 0 -3.167 1.583 1.583 0 0 1 0 3.167z" fill="#00ff99" />
    </svg>
  </div>
);

export default App;
