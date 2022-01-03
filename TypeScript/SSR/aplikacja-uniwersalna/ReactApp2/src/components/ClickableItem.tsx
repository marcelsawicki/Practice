import * as React from 'react';

export class ClickableItem {
    id: number;
    displayName: string;
}

export class ClickItemView extends React.Component<ClickableItem, {}>
{
    constructor(props:ClickableItem){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(): JSX.Element{
        return(<li><button onClick={this.handleClick}>{this.props.displayName}</button></li>)
    };

    handleClick(){
        alert(`handleClick() {id: ${this.props.id} displayName: ${this.props.displayName}} `);
    }
}