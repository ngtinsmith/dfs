import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Tab from '../tab/tab'
import Button from '../common/button/button'
import { Plus } from '../icons/icons'

import { setActivePanel } from '../../store/panel/panel.actions'
import { selectActivePanel } from '../../store/panel/panel.selectors'

import styles from './tab-group.module.scss'

const TabGroup = ({ panels, activePanel, setActivePanel }) => {
    const onSelectTab = (panelId, framesId) => {
        setActivePanel(panelId, framesId)
    }

    return (
        <div className={styles.tabGroupContainer}>
            <div className={styles.tabGroup}>
                {panels
                    .sort((a, b) => (a.order < b.order ? -1 : 1))
                    .map(({ id, title, frames_uid }) => (
                        <Tab
                            isActive={activePanel === id}
                            key={id}
                            label={title}
                            onClick={() => onSelectTab(id, frames_uid)}
                        />
                    ))}
            </div>
            <div className={styles.tabControls}>
                <Button svg={<Plus />} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    activePanel: selectActivePanel
})

const actionCreators = {
    setActivePanel
}

export default connect(mapStateToProps, actionCreators)(TabGroup)
