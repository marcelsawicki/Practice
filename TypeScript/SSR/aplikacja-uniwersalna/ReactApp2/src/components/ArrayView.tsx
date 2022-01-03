import * as React from "react";
import { ClickableItem, ClickItemView } from "./ClickableItem";

export interface IArrayViewProps {
    title: string,
    items: ClickableItem[]
}

export class ArrayView extends React.Component<IArrayViewProps, {}>{
    render() {
        let buttonNodes = this.props.items.map(function(item){
            return(
                <ClickItemView {...item} />
            );
        });

        return <div>
            <h1>{this.props.title}</h1>
            <ul>
                {buttonNodes}
            </ul>
        </div>
    }
}