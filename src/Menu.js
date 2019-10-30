import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const liStyle = {
            display: 'inline',
            width: '100px'
        }

        return (
            <Router>
                <div style={{width: '500px', textAlign: 'left'}}>
                    <ul style={{display: 'flex'}}>
                        <li style={liStyle}><Link to='/'>top</Link></li>
                        <li style={liStyle}><Link to='/page1'>page1</Link></li>
                        <li style={liStyle}><Link to='/page2'>page2</Link></li>
                        <li style={liStyle}><Link to='/page3'>page3</Link></li>
                    </ul>

                    <div style={{marginLeft: '50px'}}>
                        <Route path='/' exact component={topPage}/>
                        <Route path='/page1' exact component={page1}/>
                        <Route path='/page2' exact component={page2}/>
                        <Route path='/page3' exact component={page3}/>
                    </div>
                </div>
            </Router>
        )
    }
}
