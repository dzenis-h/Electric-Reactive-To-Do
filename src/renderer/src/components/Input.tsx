import React, {Component} from "react";
import { IInputProps, IInputState } from "./../../../interfaces";
import './Input.css'


class Input extends Component<IInputProps, IInputState>{
    render(){
        return(
            <div className="navbar navbar-expand-lg">
                <form className="form-group m-auto p-1" onSubmit={ e => this.props.onSubmit(e) }>
                    <input 
                    className="form-control mb-1 text-primary" 
                    placeholder="Let us fill out this list, buddy :)" 
                    value={this.props.val} 
                    name="item" 
                    type="text" 
                    autoFocus={true}
                    onChange={ e => this.props.onChange(e) } />
                </form>
            </div>
        );
    }
}

export default Input;