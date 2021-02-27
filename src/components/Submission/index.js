import React from 'react'
import { CgChevronDown } from 'react-icons/cg'
import { RiDownloadCloudFill } from 'react-icons/ri'
import { FiCheck, FiX } from 'react-icons/fi'
import { AiOutlineLink, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Navbar'

const SubmissionStyle = styled.div`
`

const SubPage = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    .Submission-page {
        width: 85%;
        display: flex;
        margin-left: .2rem;
        @media (max-width: 768px) {
            width: 99%;
        }
    
        .art {
            flex: 0 0 54%;
            padding: 0 .7rem;
            @media (max-width: 768px) {
                flex: 0 0 100%;
                padding: 0 1rem;
            }
            .heading {
                display: flex;
                justify-content: space-between;
                margin: 1rem .1rem;
                h4 {
                    font-size: 1rem;
                }
                div {
                    display: flex;
                    align-items: center;
                    h4 {
                        font-size: .9rem;
                    }
                }
            }
            .art-desc {
                padding: 1rem;
                height: 65vh;
                border-radius: 5px;
                @media (max-width: 768px) {
                }
                .art-desc-heading {
                    display: flex;
                    justify-content: space-between;
                    div {
                        h4 {
                            font-size: 1.2rem;
                        }
                        p {
                            font-weight: 600;
                            @media (max-width: 450px) {
                                font-size: .95rem;
                            }
                            @media (max-width: 385px) {
                                font-size: .85rem;
                            }
                            @media (max-width: 350px) {
                                font-size: .7rem;
                            }
                            @media (max-width: 310px) {
                                font-size: .65rem;
                                letter-spacing: -.5px;
                            }
                        }
                    }
                    .sign {
                        display: flex;
                        align-items: center;
                        div {
                            margin: .4rem;
                            border-radius: 5px;
                            padding: .15rem .35rem 0 .35rem;
                            vertical-align: center;
                            a {
                               text-decoration: none;
                               font-size: 1.35rem;
                               @media (max-width: 360px) {
                                    font-size: .95rem;
                                }
                            }
                        }
                    }
                }
                .types {
                    display: flex;
                    justify-content: space-between;
                    margin-top: .9rem;
                    margin-bottom: 1rem;
                    h5 {
                        font-size: 1rem;
                        @media (max-width: 400px) {
                            font-size: .95rem;
                        }
                        @media (max-width: 385px) {
                            font-size: .85rem;
                        }
                        @media (max-width: 385px) {
                            font-size: .8rem;
                            font-weight: 600;
                        }
                        @media (max-width: 330px) {
                            font-size: .7rem;
                        }
                    }
                    p {
                        font-size: 1.1rem;
                        font-weight: 600;
                        @media (max-width: 475px) {
                            font-size: 1rem;
                        }
                        @media (max-width: 385px) {
                            font-size: .9rem;
                        }
                        @media (max-width: 330px) {
                            font-size: .8rem;
                        }
                    }
                }
                .links {
                    a {
                        text-decoration: none;
                        margin-left: .5rem;
                        font-size: 1.5rem;
                        @media (max-width: 360px) {
                            font-size: 1.1rem;
                        }
                    }
                }
                .test {
                    height: 38.5vh;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    margin: 0 auto;
                    background-color: #fff;
                    color: #212121;

                    h3 {
                        font-size: 1.7rem;
                        @media (max-width: 768px) {
                            font-size: 1.4rem;
                        }
                        @media (max-width: 475px) {
                            font-size: 1.2rem;
                        }
                    }
                }
            }
        }
        .music {
            flex: 0 0 46%;
            margin-top: 1rem;
            margin-left: 0rem;
            h3 {
                font-size: 1.2rem;
                font-weight: 600;
            }
            p {
                margin: .9rem 0;
                font-size: .95rem;
                font-weight: 600;
            }
        }
    }
`

const Submission = () => {
    return (
        <SubmissionStyle>
            <SubPage>
                <Nav/>
                <div className="Submission-page">
                    <div className="art">
                        <div className="heading">
                            <h4>Art</h4>
                            <div>
                                <h4>By Time</h4>
                                <CgChevronDown />
                            </div>
                        </div>
                        <div className="art-desc desc">
                            <div className="art-desc-heading">
                                <div>
                                    <h4>funny123</h4>
                                    <p className="gc">1/5/2021 at 4:43:16 PM</p>
                                </div>
                                <div className="sign">
                                    <div className="sigb"><Link className="sigc" to="#"><RiDownloadCloudFill /></Link></div>
                                    <div className="sigb"><Link className="sigc" to="#"><FiCheck /></Link></div>
                                    <div className="sigb"><Link className="sigc" to="#"><FiX /></Link></div>
                                </div>
                            </div>
                            <div className="types">
                                <div className="Title">
                                    <h5 className="gc">Artwork Title</h5>
                                    <p>Test</p>
                                </div>
                                <div className="Name">
                                    <h5 className="gc">Artist Name</h5>
                                    <p>funny</p>
                                </div>
                                <div className="Type">
                                    <h5 className="gc">Type</h5>
                                    <p>Illustration</p>
                                </div>
                            </div>
                            <div className="links">
                                <Link className="gc" to="#"><AiOutlineLink /></Link>
                                <Link className="gc" to="#"><AiOutlineTwitter /></Link>
                                <Link className="gc" to="#"><AiFillYoutube /></Link>
                            </div>
                            <div className="test">
                                <h3>test image</h3>
                            </div>
                        </div>
                    </div>
                    <div className="music">
                        <h3>Music</h3>
                        <p className="gc">No Music Submissions yet.</p>
                    </div>
                </div>

            </SubPage>
        </SubmissionStyle>
    )
}

export default Submission
