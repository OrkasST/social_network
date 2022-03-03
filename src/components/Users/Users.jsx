import * as axios from 'axios';
import React from 'react';
import User from './User/User';
import s from './Users.module.css'

class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let users = this.props.users.map(u => <User user={u} key={u.id} follow={this.props.follow} unfollow={this.props.unfollow} />)
        let pages = [];

        let count = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

        for (let p = 1; p <= count; p++) {
            pages.push(p)
        }


        return (
            <div>
                <div>
                    {pages.map( p => {
                        if (p <= this.props.currentPage + 2 && p >= this.props.currentPage - 2 || p === 1 || p === count) return <span 
                            key={'000'+p} 
                            className={s.page + (p === this.props.currentPage ? ' ' + s.selected : '')}
                            onClick={ () => this.onPageChanged(p) }>{p}</span>
                        else return null
                    } ).map((el,i,arr) => {
                        if (arr[i] === null && arr[i+1] !== null) return '..'
                        else return el
                    })}
                </div>
                {users}
            </div>
        )
    }
}

export default Users;