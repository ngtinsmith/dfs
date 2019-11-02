import { combineReducers } from 'redux'

import workspaceReducer from './workspace/workspace.reducer'
import frameReducer from './frame/frame.reducer'

const rootReducer = combineReducers({
    workspace: workspaceReducer,
    frames: frameReducer
})

export default rootReducer
