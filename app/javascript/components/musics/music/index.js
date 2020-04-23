import React , { Fragment } from 'react'
import { Heading, Columns } from 'react-bulma-components'
import styled from 'styled-components'
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa'

const MusicSeparator = styled.hr`
    height: 1px;
    margin-top: 0px;
`

const CustomSubHeading = styled(Heading)`
    margin-bottom: 0px !important;
`

const Music = props => {

    let PlayingButton

    if(props.playing) {
        PlayingButton = <FaStopCircle size="45px" className="has-text-white" onClick={() => props.setPlaying([])} />
    } else {
        PlayingButton = <FaPlayCircle size="45px" className="has-text-white" onClick={() => props.setPlaying(props.songs)} />
    }
    
    return (
        
        <Fragment>

            <Columns className="is-vcentered is-mobile is-centered">

                <Columns.Column desktop={{size: 1}} mobile={{size: 2}}>
                    {PlayingButton}
                </Columns.Column>

                <Columns.Column desktop={{size: 4}} mobile={{size: 8}}>
                    <Columns className="is-vcentered is-mobile">
                        <Columns.Column desktop={{size: 8}} mobile={{size: 8}}>
                            
                            <Heading size={ 5 } className="has-text-white">
                                {props.songs.title}
                            </Heading>

                            <CustomSubHeading size={ 5 }  className="has-text-white" subtitle>
                                {props.songs.artist_name}
                            </CustomSubHeading>

                        </Columns.Column>

                        <Columns.Column desktop={{size: 4}} mobile={{size: 4}} className="is-pulled-right has-text-right">

                        </Columns.Column>

                    </Columns>

                    <MusicSeparator />

                </Columns.Column>

            </Columns>
             
        </Fragment>
    )
}

export default Music