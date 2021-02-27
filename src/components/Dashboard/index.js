import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsDot } from 'react-icons/bs'
import Nav from '../Navbar'

const SubmissionStyle = styled.div`

`

const SubPage = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    .Dashboard-page {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin-left: 1.3rem;
        @media (max-width: 768px) {
            width: 99%;
        }
    }
    .heading {
        margin-bottom: 1.3rem;
        h1 {
            font-size: 1.5rem;
            margin: .8rem 0 .2rem 0;
        }
        p {
            @media (max-width: 400px) {
                font-size: .9rem;
            }
            @media (max-width: 340px) {
                font-size: .8rem;
            }
            @media (max-width: 295px) {
                font-size: .7rem;
            }
        }
    }
    .checkbox-heading {
        h4 {
            font-size: 1.1rem;
            font-weight: 600;
            @media (max-width: 350px) {
                font-size: 1rem;
            }
            @media (max-width: 320px) {
                font-size: .9rem;
            }
            @media (max-width: 285px) {
                font-size: .8rem;
            }
        }
        p {
            margin: .9rem 0 .3rem 0;
            font-weight: 600;
        }
        .radio-button {
            display: flex;
            flex-direction: column;
            label {
                font-weight: 600;
                margin-left: .4rem;
            }
        }
    }
    .Email {
        display: flex;
        flex-direction: column;
        width: 75%;
        @media (max-width: 500px) {
            width: 85%;
        }
        @media (max-width: 425px) {
            width: 90.5%;
        }
        label {
            margin: .9rem 0 .3rem 0;
            font-weight: 600;
        }
        input {
            padding: .8rem;
            border-radius: 5px;
            /* border: 1px solid #ccc; */

            ::placeholder {
                font-size: .95rem;
                font-weight: 500;
            }
        }
    }
    .btn {
        display: flex;
        margin: 1rem 0;
        div {
            padding: .5rem .7rem;
            margin-right: 1.2rem;
            /* border: 1px solid #000; */
            border-radius: 5px;
            @media (max-width: 500px) {
                margin-right: .5rem;
            }
            a {
            text-decoration: none;
            font-size: .95rem;
            letter-spacing: .02rem;
            font-weight: 600;
            @media (max-width: 400px) {
                font-size: .85rem;
            }
            }
        }
    }
    .Message {
        p {
            font-size: 1.05rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            .span {
                font-size: 2rem;
                margin: 0 -.1rem;
            }
        }
        p:not(:last-of-type) {
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`

const Dashboard = () => {
    return (
        <SubmissionStyle>
            <SubPage>
                <Nav/>
                <div className="Dashboard-page">
                    <div className="heading">
                        <h1>Dashboard</h1>
                        <p className="gc">With great power comes great responsibility.</p>
                    </div>
                    <div className="checkbox-heading">
                        <h4>Add or Remove Artist / Staff / Admins</h4>
                        <p className="gc">Type</p>
                        <form className="radio-button">
                            <div>
                                <input type="radio" checked="checked" id="male" name="gender" value="male" />
                                <label for="male">Artist</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label for="female">Staff</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="gender" value="other" />
                                <label for="other">Admin</label>
                            </div>
                        </form>
                        
                    </div>
                    <div className="Email">
                        <label className="gc">User Email</label>
                        <input type="text" placeholder="Email" name="email" required />
                    </div>
                    <div className="btn">
                        <div className="btnb"><Link to="#">Unban Artist</Link></div>
                        <div className="btnr"><Link to="#">Ban Artist</Link></div>
                    </div>
                    <div className="Message">
                        <p>Messages <BsDot className="span"/> 0</p>
                        <p>No message to show here yet.</p>
                    </div>
                </div>

            </SubPage>
        </SubmissionStyle>
    )
}

export default Dashboard
