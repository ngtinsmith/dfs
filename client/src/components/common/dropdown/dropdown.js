import React, { useRef } from 'react'

import DropdownToggle from '../dropdown-toggle/dropdown-toggle'
import DropdownItems from '../dropdown-items/dropdown-items'

import { useToggle } from '../../utils/custom-hooks'

import styles from './dropdown.module.scss'

const Dropdown = ({ toggleIcon, items, style = false, label }) => {
    const dropdown = useRef()
    const [toggle, setToggle] = useToggle(dropdown, false)

    const { dropdownToggle, toggleContent, dropdownItems, dropdownItem } = style

    return (
        <div ref={dropdown} className={styles.dropdown}>
            <DropdownToggle
                label={label}
                style={style && { dropdownToggle, toggleContent }}
                toggleIcon={toggleIcon}
                toggle={toggle}
                onToggle={() => setToggle(!toggle)}
            />
            {toggle && (
                <DropdownItems
                    style={style && { dropdownItems, dropdownItem }}
                    items={items}
                    onSelect={() => setToggle(!toggle)}
                />
            )}
        </div>
    )
}

export default Dropdown
