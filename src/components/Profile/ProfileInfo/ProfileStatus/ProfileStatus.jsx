import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.aboutMe
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component updated');
        if (prevState.status !== this.props.aboutMe) this.setState({ status: this.props.aboutMe });
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
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
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
                    <input onChange={this.onStatusChange} onBlur={this.exitEditMode} autoFocus={true} value={this.state.status} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus;