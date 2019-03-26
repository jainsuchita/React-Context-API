import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default class Container extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (theme) => (
                        <LanguageContext.Consumer>
                            {
                                language => (
                                    <section>
                                        <aside>
                                            <Card className="card langauge">
                                                <div className="card-details">
                                                    <CardContent className="card-content">
                                                        <FormControl className="language-selector">
                                                            <InputLabel htmlFor="language"> {language.labels.langSelectLabel}</InputLabel>
                                                            <Select
                                                                value={language.name}
                                                                onChange={(event) => this.props.toggleLanguage(event.target.value)}
                                                                input={<Input name="Language" id="language" />}>
                                                                <MenuItem value="en">English</MenuItem>
                                                                <MenuItem value="gr">German</MenuItem>
                                                                <MenuItem value="fr">French</MenuItem>
                                                                <MenuItem value="sp">Spanish</MenuItem>
                                                                <MenuItem value="hn">Hindi</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </CardContent>
                                                </div>
                                                {/* <CardMedia
                                                className={classes.cover}
                                                image="/static/images/cards/live-from-space.jpg"
                                                title="Live from space album cover"
                                            /> */}
                                            </Card>

                                            <Card className="card theme">
                                                <div className="card-details">
                                                    <CardContent className="card-content">
                                                        <FormControl component="fieldset">
                                                            <FormLabel component="legend">{language.labels.themeSelectLabel}</FormLabel>
                                                            <RadioGroup
                                                                aria-label="Theme"
                                                                name="theme"
                                                                checked={theme.type === 'light'}
                                                                value={theme.type}
                                                                onChange={(event) => this.props.toggleTheme(event.currentTarget.value)}
                                                            >
                                                                <FormControlLabel value="light" control={<Radio />} label="Light" />
                                                                <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                        {/* <div className="theme-selector">
                                                            <span className="label">{language.labels.themeSelectLabel}({theme.type})</span>
                                                            <label className="switch">
                                                                <input type="checkbox" checked={theme.type === 'light'} onChange={(event) => this.props.toggleTheme(event.currentTarget.value)} />
                                                                <span className="slider round"></span>

                                                            </label>
                                                        </div> */}
                                                    </CardContent>
                                                </div>
                                                {/* <CardMedia
                                                className={classes.cover}
                                                image="/static/images/cards/live-from-space.jpg"
                                                title="Live from space album cover"
                                            /> */}
                                            </Card>
                                        </aside>

                                        <div className="sidebar-content">
                                            <Card className="card">
                                                <div className="card-details">
                                                    <CardContent className="card-content">
                                                        <div className="action-result" style={{ color: theme.config.fontColor, background: theme.config.bodybg }}>
                                                            {language.labels.body}
                                                        </div>
                                                    </CardContent>
                                                </div>
                                                <CardMedia
                                                    className="card-media-img"
                                                    image={theme.config.media}
                                                    title="Live from space album cover"
                                                />
                                            </Card>
                                        </div>

                                    </section>
                                )
                            }
                        </LanguageContext.Consumer>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
