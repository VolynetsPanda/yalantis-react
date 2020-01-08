import React, {Component} from 'react';
import {MONTH_ARRAY} from "../../modules/constants";
import {ColorMonth} from "../../helpers/ColorMonth";
import ListUser from "../ListUser";

export default class ListMonth extends Component{
    state={
        list:[]
    }

    componentDidMount() {
        this.getUserList()
    }
    /**
     * getting a list of users
     */
    getUserList(){
        fetch('https://yalantis-react-school.herokuapp.com/api/task0/users')
            .then(res => res.json())
            .then(res => {
                let month = MONTH_ARRAY.slice(0);
                res.forEach((elem)=>{
                    let numMonth = Number(elem.dob.split("-")[1]);
                    month[numMonth-1].users.push(elem);
                })
                this.setState({ list:month })
            })
    }

    render() {
        const {list} = this.state
        return(
            <ul className='month-wrap'>{
                list.map((elem, key)=>(
                    <li
                        className='month-wrap-item'
                        key={key}
                        style={{background:ColorMonth(elem.users.length)}}
                    >{elem.name}
                        <ListUser users={elem.users}/>
                    </li>
                ))
            }</ul>
        )
    }
}
