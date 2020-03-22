import * as React from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { typeCheck } from "../../../actions/typeCheck"
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/runVideoAction"
import { muteUnmute } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div``

export interface MuteBtnProps {

}

const MuteBtn: React.SFC<MuteBtnProps> = () => {
    const isMuted = useSelector(state => getMovieState(state).isMuted)
    const isActive = typeCheck(ButtonTypes.PLAY, isMuted)
    const dispatch = useDispatch()

    const toggleMute = () => {
        dispatch(muteUnmute())
    }

    const runAction = () => {
        runVideoAction(ButtonTypes.MUTE, isMuted, toggleMute)
    }

    return (
        <Wrapper>
            <NewVideoPlayerBtn
                mainImg="/icons/un-mute.svg"
                afterClickImg="/icons/mute.svg"
                videoState={isActive}
                runVideoAction={runAction}
            />
        </Wrapper>
    );
}

export default MuteBtn;