import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { getMovies } from './api/api';



const useStyles = makeStyles((theme) => ({

    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        position: 'absolute',
        width: '521px',
        height: '482px',
        left: 'calc(50% - 521px/2 - 0.5px)',
        top: 'calc(35% - 482px/2)',//50%
        [theme.breakpoints.down("xs")]: {
            alignItems: 'center',
            padding: '32px 16px',
            height: '586px',
            left: '0px',
            right: '0px',
            top: '0px'
        },

    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        position: 'static',
        width: '521px',
        height: '80px',
        left: '0px',
        top: '0px',
        flex: 'none',
        order: '0',
        alignSelf: 'stretch',
        flexGrow: '0',
        margin: '32px 0px',
        [theme.breakpoints.down("xs")]: {
            padding: '16px 0px',
            width: '343px',
            height: '112px',
            left: '16px',
            top: '32px',
            margin: '0px 0px',


        },
    },

    header_tittle: {
        position: 'static',
        width: '156px',
        height: '48px',
        left: '0px',
        top: '0px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '32px',
        lineHeight: '48px',
        color: '#000000',
        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '8px 0px',
        [theme.breakpoints.down("xs")]: {
            left: '0px',
            top: '16px',
        },
    },

    header_subtittle: {
        position: 'static',
        width: '231px',
        height: '24px',
        left: '0px',
        top: '56px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#000000',
        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '8px 0px',
        [theme.breakpoints.down("xs")]: {
            width: '343px',
            top: '72px',
        },
    },

    search: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px',
        position: 'relative',
        width: '521px',
        height: '152px',
        left: '0px',
        top: '0px',
        border: "2px solid rgba(36, 36, 36, 0.25)",
        boxSizing: 'border-box',
        borderRadius: '8px',
        flex: 'none',
        order: '0',
        alignSelf: 'stretch',
        flexGrow: '0',
        margin: '16px 0px',
        [theme.breakpoints.down("xs")]: {

            width: '343px',
            top: '16px',
            margin: '24px 0px',
        },
    },
    search_tittle: {
        position: 'static',
        width: '84px',
        height: '24px',
        left: '16px',
        top: '16px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '8px 0px'

    },
    search_inputbar: {
        position: 'static',
        width: 'auto',
        height: '40px',
        left: '16px',
        top: '48px',
        border: '1px solid rgba(36, 36, 36, 0.25)',
        boxSizing: 'border-box',
        flex: 'none',
        order: '1',
        alignSelf: 'stretch',
        flexGrow: '0',
        margin: '8px 0px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#171717',
        [theme.breakpoints.down("xs")]: {
            width: '311px',
        },

    },
    button: {
        position: 'static',
        width: '489px',
        height: '40px',
        left: '16px',
        top: '96px',
        flex: 'none',
        order: '2',
        alignSelf: 'stretch',
        flexGrow: '0',
        margin: '8px 0px',
        [theme.breakpoints.down("xs")]: {
            width: '311px',
        },
    },

    button_clear: {
        position: 'absolute',
        width: '42px',
        height: '24px',
        right: '120px',
        top: '110px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#50B83C',
        border: 'solid white',
        backgroundColor: 'white',


    },
    button_search: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '8px 16px',
        position: 'absolute',
        width: '89px',
        height: '40px',
        right: '15px',
        top: '105px',
        background: '#50B83C',
        borderRadius: '32px',
        color: '#F9FAFB',
        border: 'solid #F9FAFB',
        [theme.breakpoints.down("xs")]: {
            top: '105px',
        },


    },

    movies: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px',
        position: 'static',
        width: '521px',
        height: '480px',
        left: '0px',
        top: '168px',
        border: '1px solid rgba(36, 36, 36, 0.25)',
        boxSizing: 'border-box',
        borderRadius: '8px',
        flex: 'none',
        order: '1',
        alignSelf: 'stretch',
        margin: '16px 0px',
        [theme.breakpoints.down("xs")]: {
            width: '343px',
            height: '350px',
            top: '192px',
            margin: '24px 0px',
        },

    },

    results: {
        position: 'static',
        width: '200px',
        height: '24px',
        left: '16px',
        top: '16px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '8px 0px',
        [theme.breakpoints.down("xs")]: {
            width: '200px',

        },
    },

    more: {
        position: 'static',
        width: '257px',
        height: '18px',
        left: '16px',
        top: '48px',
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px',
        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '8px 0px'
    },

    movie: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '8px 0px',
        position: 'static',
        width: '4000px',
        height: '112px',
        left: '16px',
        top: '74px',
        flex: 'none',
        order: '2',
        flexGrow: '0',
        margin: '8px 0px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '2px'
        },


    }

}));



const Movies = () => {
    const classes = useStyles();
    const [moviess, setMovies] = useState([])
    const [search, setSearch] = useState("")

    function clearHandler() {
        setSearch("")
        getMovies(setMovies, "")
        window.location = "/"
    }

    return (
        <div className={classes.page}>
            <div className={classes.header}>
                <p className={classes.header_tittle}> OMDb API</p>
                <h4 className={classes.header_subtittle}>The Open Movie Database 🍿</h4>
            </div>

            <div className={classes.search}>
                <h4 className={classes.search_tittle}>Movie title</h4>
                <input
                    className={classes.search_inputbar}
                    type="text"
                    placeholder="Search"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                >
                </input>
                <div className={classes.button}>
                    <button className={classes.button_clear} onClick={() => { clearHandler() }}>Clear</button>
                    <button className={classes.button_search} onClick={() => getMovies(setMovies, search)}  >Search</button>
                </div>
            </div>

            <div className={classes.movies}>
                <div className={classes.results}>
                    <p>Result for "{search}"</p>
                </div>
                <div className={classes.more}>
                    <p>Click on a movie title learn more about it</p>
                </div>
                <div className={classes.movie}>
                    {<table >
                        <tbody >
                            {
                                moviess && moviess.map(prods => (
                                    < tr key={prods.imdbID}>
                                        <td style={{ fontSize: "calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))" }} >*{prods.Title}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>}

                </div>
            </div>




        </div >
    )
}

export default Movies
