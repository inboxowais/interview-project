import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { Button, Divider } from 'antd'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { IsMobileWidth } from 'components/utils/util'
import Sidebar from './components/sidebar/sidebar'
import './components/sidebar/sidebar.scss'

export default function DashboardMain(props) {

    const [selected, setSelected] = useState(["item1","item2","item3"])


    const pushSelectedItemItem = (item) => {


        const arr = [...selected]

        if (arr.includes(item)) {
            var index = arr.indexOf(item)
            arr.splice(index, 1)
        }
        else {
            arr.push(item)
        }
        setSelected(arr)
    }

    console.log(selected)

    return (
        <div className="w-100 d-flex">
            <div className="w-25">
                <Sidebar
                    pushSelectedItemItem={pushSelectedItemItem}
                    selected = {selected}
                />
            </div>
            <div className="w-75" id="sidebar">
                <div className="w-100 d-flex justify-content-end align-items-center back-color" style={{ height: "5vh" }}>
                    <div className="pr-4">
                        Add To Widgets
                    </div>
                </div>
                <div className="bg-dark position-relative" style={{ height: "95vh" }}>
                    {
                        selected.includes("item3") ?
                            <div className="image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KDipP7Bh0dDAmPTKM41qYL6quVPx8zO-tw&usqp=CAU" />
                            </div> : null
                    }
                    {
                        selected.includes("item2") ?
                            <div className="image">
                                <img src="https://www.clipartmax.com/png/middle/67-679505_we-need-your-tick-right-image-without-background.png" />
                            </div> : null
                    }
                    {
                        selected.includes("item1") ?
                            <div className="image">
                                <img src="https://toppng.com/uploads/preview/lightning-png-transparent-images-lightni-11562988110qdfbgizx8u.png" />
                            </div> : null

                    }
                </div>
            </div>
        </div>
    )
}
