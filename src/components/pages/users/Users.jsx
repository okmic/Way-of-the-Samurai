import ava from '../../img/avaDefolt.jpg'
import React from 'react';
import './users.css'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

  return (
  <div className="friendsContainer">
    <div className="colorText" >
      {pages.map(p => {
        return <span className={props.currentPage === p && "activ__span"} key={p} onClick={(e) => { props.onPageChange(p) }} >{p}</span>
      }
      )}

    </div>
    {
      props.users.map(u => <div className="friendsContainer__eUser" kay={u.id}>
        <div className="eUser__ava">
          <img src={u.photos.small != null ? u.photos.small : ava} alt={u.id} />
          {u.followed
            ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
            : <button onClick={() => { props.follow(u.id) }}>follow</button>
          }
        </div>
        <div className="eUser__description">
          <div className="description__name">
            <span className="description__name">{u.name}</span>
          </div>

          <div className="description__status">
            <span className="status__title">{u.status}</span>
          </div>

          <div className="description__location">
            <span>{/* u.location.city */}</span>
          </div>
        </div>
      </div>)
    }
  </div>)
}

export default Users

