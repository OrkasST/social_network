import React from 'react';
import User from './User/User';
import s from './Users.module.css'

const Users = (props) => {
    let users = props.users.map(u => <User user={u} key={u.id} follow={props.follow} unfollow={props.unfollow} />)
        let pages = [];

        let count = Math.ceil( props.totalUsersCount / props.pageSize );

        for (let p = 1; p <= count; p++) {
            pages.push(p)
        }

        return (
            <div>
                <div>
                    {pages.map( p => {
                        if (p <= props.currentPage + 2 && p >= props.currentPage - 2 || p === 1 || p === count) return <span 
                            key={'000'+p} 
                            className={s.page + (p === props.currentPage ? ' ' + s.selected : '')}
                            onClick={ () => props.onPageChanged(p) }>{p}</span>
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
    
export default Users;