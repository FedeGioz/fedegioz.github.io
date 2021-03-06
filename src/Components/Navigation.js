import React, { Component } from 'react';
import styled from 'styled-components';
import avatar from '../images/port.jpg';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return (
            <NavigationStyled>
                <div className="avatar">
                    <img src={avatar} alt="profilePhoto"/>
                </div>
                <ul  className={this.state.isOpen?"nav-toggle":""}>
                    <li>
                        <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                    </li>
                    <li>
                        
                    </li>
                    <li>
                  </li>
                    <li>
                       
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                    </li>
                </ul>
                <footer>
                    <p>
                        @2021 FedeGioz
                    </p>
                </footer>
            
            </NavigationStyled>         
        )
    }
}
    
const NavigationStyled = styled.nav`
   display : flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 12.3rem;
   height: 100%;
   border-right: 1px solid var(--border-color);
   .avatar{
       width: 80%;
       padding: 1rem 0;
       border-bottom: 1px solid var(--border-color);

       img{
           width: 100%;
           border-radius: 50%;
           border: 8px solid var(--border-color);
           }
       }
   ul{
    width: 100%;
    text-align: center;
        li{
            display: block;    
            a{
               font-size: 1rem;
               position: relative;
               display: block;
               padding: 0.45rem 0;
               font-weight: 600;
               letter-spacing: 1px;
               &::before{
                   content: " ";
                   background-color: var(--primary-color);
                   position: absolute;
                   width: 0px;
                   height: 50%;
                   bottom: 0;
                   left: 0;
                   opacity: 0.21;
                   transition: All .4s cubic-bezier(1,-0.2,.39,.95);
               }
           }
           a:hover::before{
                width: 100%;
                height: 100%;
           }
       }
   }
   .active-class{
           background-color: var(--primary-color);
           color: var(--white-color );
       }
   footer{
       border-top: 1px solid var(--border-color);
       p{
           margin-top: 1rem;
           font-size: 1rem;
           display: block;
           text-align: center;
       }
   }

`
export default Navigation
