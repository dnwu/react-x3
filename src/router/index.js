import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './../App'
import Main from './../containers/main'
import Login from './../containers/login'

import DeviceActivation from './../pages/DeviceActivation'
import InterDeploy from './../pages/InterDeploy'
import FaceManage from './../pages/FaceManage'
import CameraManage from './../pages/CameraManage'
import RelayManage from './../pages/RelayManage'
import PositionInfo from './../pages/PositionInfo'
import FaceInfo from './../pages/FaceInfo'
import WayInfo from './../pages/WayInfo'
import ProjectTest from './../pages/ProjectTest'
import FaceList from './../pages/FaceList'
import System from './../pages/System'
import SystemLog from './../pages/SystemLog'
import Storage from './../pages/Storage'

class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/' render={() => 
                            <Main>
                                <Switch>
                                    <Route path='/internet/activation' component={DeviceActivation} />
                                    <Route path='/internet/deploy' component={InterDeploy} />

                                    <Route path='/devicedeploy/face' component={FaceManage} />
                                    <Route path='/devicedeploy/carmera' component={CameraManage} />
                                    <Route path='/devicedeploy/relay' component={RelayManage} />

                                    <Route path='/function/position' component={PositionInfo} />
                                    <Route path='/function/faceInfo' component={FaceInfo} />
                                    <Route path='/function/wayInfo' component={WayInfo} />

                                    <Route path='/project/projectTest' component={ProjectTest} />
                                    <Route path='/project/faceList' component={FaceList} />

                                    <Route path='/system/system' component={System} />
                                    <Route path='/system/systemLog' component={SystemLog} />
                                    <Route path='/system/storage' component={Storage} />
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