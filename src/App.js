import React        from 'react';
import UserStore    from './stores/UserStore';
import LoginForm    from './form/LoginForm';
import InputField   from './field/InputField';
import SubmitButton from './button/SubmitButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"login"} component={Login} />
                    <Route path={"register"} component={Register} />
                </Switch>
            </Router>
        );
    }
}

export default App;
