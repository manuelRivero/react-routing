import React from 'react';

import styles from './gradientCard.module.css';


export default function gradientCard(props) {
  return (
    <>
                <div className={[styles.Card, "fadeUp"].join(" ")}>
                    <div className="fadeDown" style={{marginBottom: "5rem"}}>
                        {props.children}
                    </div>
                </div>
    </>
  );
}
