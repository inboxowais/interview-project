import { Button } from '@material-ui/core'
import React from 'react'
import './sidebar.scss'

export default function Sidebar(props) {
    return (
        <div className="w-100" id="sidebar">
            <div className="sidebar w-100 flex-column d-flex justify-content-between">
                <div className="d-flex flex-column w-100">
                    <div className="text-color">
                        <div className="pl-3 pt-2 pb-2">
                            <div className="text-color"> Dust Analysis</div>
                        </div>
                        <div className='d-flex flex-column w-100 pl-3 pr-3 ' >
                            <div className="d-flex justify-content-between align-items-center pt-2 pb-2 cursor-pointer" style = {{backgroundColor : props.selected.item1 ? "lightgray" : null}} onClick = {() => props.pushSelectedItemItem("item1")}>
                                <div className="d-flex align-items-center">

                                <i class="far fa-circle" style = {{color:"blue"}}></i>
                                    <div className="pl-2 text-color">Matching Makers</div>


                                </div>
                                <div className="text-color">
                                    45%
                                </div>
                                <div className="text-color">
                                <i class="fas fa-shapes"></i>
                                </div>
                                <div>
                                    <i className="fa fa-circle text-color"></i>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pt-2 pb-2 cursor-pointer"  onClick = {() => props.pushSelectedItemItem("item2")} style = {{backgroundColor : props.selected.item2 ? "lightgray" : null}}>
                                <div className="d-flex align-items-center">

                                <i class="fa fa-square" style = {{color:'red'}} aria-hidden="true"></i>
                                    <div className="pl-2 text-color">Matching Makers</div>


                                </div>
                                <div className="text-color">
                                    25%
                                </div>
                                <div className="text-color">
                                <i class="fas fa-shapes"></i>
                                </div>
                                <div>
                                    
                                    <i className="fa fa-circle text-color text-color"></i>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 pt-2 cursor-pointer" onClick = {() => props.pushSelectedItemItem("item3")} style = {{backgroundColor : props.selected.item3 ? "lightgray" : null}}>
                                <div className="d-flex align-items-center">

                                <i class="fas fa-exclamation-triangle" style = {{color : "yellow"}}></i>
                                    <div className="pl-2 text-color">Matching Makers</div>


                                </div>
                                <div className="text-color">
                                    15%
                                </div>
                                <div className="text-color">
                                <i class="fas fa-shapes"></i>
                                </div>
                                <div>
                                    <i className="fa fa-circle text-color"></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-100 back-color d-flex justify-content-end pr-2 pt-2 pb-2">
                    <div className = "d-flex">
                        <div>
                            <Button color = "default">Cancel</Button>
                        </div>
                        <div className = "pl-2">
                            <Button color = "primary">Save Analysis</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
