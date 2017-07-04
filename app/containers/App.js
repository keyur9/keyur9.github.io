import { Component } from 'react'
import { div, p, text, a } from '../components'

import Circles from './Circles/Circles'

export default
class App extends Component {
    constructor() {
        super()

        this.state = {
            cursor: true,
            username: ""
        }
    }

    componentWillMount() {
        this.blink()
        setTimeout(this.writeUsername, 3000)
    }

    writeUsername = () => {
        const word = "@keyurdoshi"
        const {username} = this.state
        if (word.length != username.length) {
            this.setState({
                username: word.substring(0, username.length + 1)
            }, () => {
                setTimeout(this.writeUsername, 25)
            })
        }
    }

    blink = () => {
        const {cursor} = this.state
        this.setState({
            cursor: !cursor
        }, () => {
            setTimeout(this.blink, 600)
        })
    }

    render() {
        const {cursor, username} = this.state

        return (
            div({className: 'app'},
                Circles(),

                div({className: 'center'},
                    p({className: 'name'}, "Keyur ", text({}, "Doshi")),
                    div({className: 'sub-name'},
                        p({className: 'username'}, username, " ", text({style: {color: `${cursor ? 'transparent' : 'inherit'}`}}, "_")),

                        div({className: 'icons'},
                            a({className: "icon-github", href: "https://github.com/keyur9", target: "_blank"}),
                            a({className: "icon-twitter", href: "https://twitter.com/Precocious___", target: "_blank"}),
                            a({className: "icon-mail", href: "mailto:keyur.kv@gmail.com"})
                        )
                    )
                )
            )
        )
    }
}
