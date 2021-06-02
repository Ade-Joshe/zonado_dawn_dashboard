import React from 'react'
import { Button } from '..';
import styles from "./cards.module.css";
import PropTypes from "prop-types"

const CardWidget = ({ cardHeader, body, btnLabel, btnAction }) => {
    return (
        <div className={styles.card}>

            <div>
                {cardHeader}
                {
                    btnLabel ?
                        <Button onClick={btnAction}>
                            {btnLabel}
                        </Button>
                        :
                        <>
                        </>
                }
            </div>

            {body}
        </div >
    )
}

CardWidget.propTypes = {
    cardHeader: PropTypes.string.isRequired,
    body: PropTypes.element || PropTypes.string,
    btnAction: PropTypes.func,
    btnLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export { CardWidget };