import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './../App'
import Main from './../containers/main'

import DeviceActivation from './../pages/DeviceActivation'
import InterDeploy from './../pages/InterDeploy'
import FaceManage from './../pages/FaceManage'
import CameraManage from './../pages/CameraManage'
import RelayManage from './../pages/RelayManage'
import PositionInfo from './../pages/PositionInfo'

class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={DeviceActivation} />
                        <Route path='/' render={() => 
                            <Main>
                                <Switch>
                                    <Route path='/internet/activation' component={DeviceActivation} />
                                    <Route path='/internet/deploy' component={InterDeploy} />

                                    <Route path='/devicedeploy/face' component={FaceManage} />
                                    <Route path='/devicedeploy/carmera' component={CameraManage} />
                                    <Route path='/devicedeploy/relay' component={RelayManage} />

                                    <Route path='/function/position' component={PositionInfo} />
                                    <Route path='/function/faceInfo' component={DeviceActivation} />
                                    <Route path='/function/wayInfo' component={DeviceActivation} />

                                    <Route path='/project/projectTest' component={DeviceActivation} />
                                    <Route path='/project/faceList' component={DeviceActivation} />

                                    <Route path='/system/system' component={DeviceActivation} />
                                    <Route path='/system/systemLog' component={DeviceActivation} />
                                    <Route path='/system/storage' component={DeviceActivation} />
                                    <Redirect to="/internet/activation" />
                                </Switch>
                            </Main>
                        } />
                    </Switch>
                </App>
            </Router>
        )
    }
}
export default IRouter