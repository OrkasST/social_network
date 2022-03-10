import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    enterEditMode() {
        this.setState({
            editMode: true
        })
    }
    exitEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div className={s.wrapper}>
            { !this.state.editMode ?
                <div>
                    <span onDoubleClick={this.enterEditMode.bind(this)} ><b>Status:</b> {this.props.aboutMe}</span>
                </div>
                : <div className={s.editor}>
                    <span>New Status:</span>
                    <input onBlur={this.exitEditMode} autoFocus={true} value={this.props.aboutMe} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus;