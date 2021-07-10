import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './Helpers/AuthContext';
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Footer/Footer';
import Registration from './Pages/Registration/Registration';
import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';
import Vehicles from './Pages/Vehicles/Vehicles';
import Projects from './Pages/Projects/Projects';
import Login from './Pages/Login/Login';
import Postajob from './Pages/PostAJob/Postajob';
import Job from './Pages/Job/Job';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Account from './Pages/Account/Account';
import Dash from './Pages/Dash/Dash';

function App() {
  const [authState, setAuthState] = useState({status: false, firstname: "", id: 0, lastname: "", email: ""});
  useEffect(() => {
    axios.get('/users/validation', { headers: {accessToken: localStorage.getItem("accessToken")}})
      .then((response) => {
        if (response.data.error) {
          setAuthState({status: false, firstname: "", id: 0});
        } else {
          setAuthState({ status: true, firstname: response.data.firstname, id: response.data.id, email: response.data.email, lastname: response.data.lastname });
          console.log(response.data);
        }
      });
  }, []);

  return (
    <main>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Navbar />
          <Switch>
            <>
              <section>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/jobs" exact>
                  <Jobs />
                </Route>
                <Route path="/vehicles" exact>
                  <Vehicles />
                </Route>
                <Route path="/projects" exact>
                  <Projects />
                </Route>
                <Route path="/signup" exact>
                  <Registration />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/postjob" exact>
                  <Postajob />
                </Route>
                <Route path="/job/:id" exact>
                  <Job />
                </Route>
                <Route path="/account" exact>
                  <Account />
                </Route>
                <Route path="/dash" exact>
                  <Dash />
                </Route>
              </section>
            </>
          </Switch>
        </Router>
        <Footer />
      </AuthContext.Provider>
    </main>
  );
}

export default App;
