import React from 'react'
import Button from "../components/Button";

const Buttons = () => {
    return (
        <div className='button_page'>
            <h1>Buttons</h1>
            <div className="buttons">
                <div className="row">
                    <pre> &#60;Button /&#62;</pre>
                    <Button />
                </div>
                <div className="row">
                    <pre> &#60;Button variant="outline" /&#62;</pre>
                    <Button variant="outline" />
                </div>
                <div className="row">
                    <pre> &#60;Button variant="text" /&#62;</pre>
                    <Button variant="text" />
                </div>
                <div className="row">
                    <pre> &#60;Button disableShadow /&#62;</pre>
                    <Button disableShadow color={"primary"} />
                </div>
                <div className="row">
                    <pre> &#60;Button disabled /&#62;</pre>
                    <Button disabled />
                </div>
                <div className="row">
                    <pre> &#60;Button disabled variant='text'/&#62;</pre>
                    <Button disabled variant='text' />
                </div>
                <div className="row">
                    <pre> &#60;Button startIcon="local_grocery_store"/&#62;</pre>
                    <Button startIcon="local_grocery_store" color="primary" />
                </div>
                <div className="row">
                    <pre> &#60;Button endIcon="local_grocery_store"/&#62;</pre>
                    <Button endIcon="local_grocery_store" color="primary" />
                </div>
                <div className="row">
                    <pre> &#60;Button size="sm" /&#62;</pre>
                    <Button size="sm" color={"primary"} />
                </div>
                <div className="row">
                    <pre> &#60;Button size="md" /&#62;</pre>
                    <Button size="md" color={"primary"} />
                </div>
                <div className="row">
                    <pre> &#60;Button size="lg" /&#62;</pre>
                    <Button size="lg" color={"primary"} />
                </div>
                <div className="row">
                    <pre> &#60;Button color="default" /&#62;</pre>
                    <Button color="default" />
                </div>
                <div className="row">
                    <pre> &#60;Button color="primary" /&#62;</pre>
                    <Button color="primary" />
                </div>
                <div className="row">
                    <pre> &#60;Button color="secondary" /&#62;</pre>
                    <Button color="secondary" />
                </div>
                <div className="row">
                    <pre> &#60;Button color="danger" /&#62;</pre>
                    <Button color="danger" />
                </div>
            </div>
        </div>
    )
}

export default Buttons