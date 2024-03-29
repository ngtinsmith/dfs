import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectActivePanel } from '../../../store/panel/panel.selectors'
import Frames from '../../../components/frames/frames'

import styles from './panel.module.scss'

const Panel = ({ panels, frames, activePanelId }) => (
    <div className={styles.panelContainer}>
        {panels.map(panel => {
            const { id, frames_uid } = panel

            return (
                <Frames
                    key={id}
                    isActive={id === activePanelId}
                    frames={frames[frames_uid]}
                />
            )
        })}
    </div>
)

const mapStateToProps = createStructuredSelector({
    activePanelId: selectActivePanel
})

export default connect(mapStateToProps)(Panel)
