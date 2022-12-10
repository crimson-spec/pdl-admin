import styled from 'styled-components';

export const AreaHeader = styled.div`
  height: 80px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  font-size: 18px;

  .container {
    height: 100%;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        width: 70px;
        border-radius: 50%;
        border: 2px solid #000;
      }
    }

    .user {
      a {
        text-decoration: none;
        color: #fff;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;

      .menus {
        display: flex;
        list-style: none;
      }
      .menu-items {
        position: relative;
      }
      .menu-items a {
        display: block;
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }
      .menu-items button {
        color: inherit;
        font-size: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
      }
      .menu-items a,
      .menu-items button {
        text-align: left;
        padding: 0.7rem 1rem;
      }
      .arrow::after {
        content: '';
        display: inline-block;
        margin-left: 0.28em;
        vertical-align: 0.09em;
        border-top: 0.42em solid;
        border-right: 0.32em solid transparent;
        border-left: 0.32em solid transparent;
      }

      .dropdown {
        position: absolute;
        right: auto;
        left: 0;
        font-size: 0.875rem;
        z-index: 9999;
        min-width: 10rem;
        padding: 0.5rem 0;
        list-style: none;
        background-color: #f8f7f2;
        color: #000;
        border-radius: 0.2rem;
        display: none;
        &:hover {
          /* color: #dc101a; */
        }
      }

      .dropdown.show {
        display: block;
      }

      .dropdown.dropdown-submenu {
        position: absolute;
        left: 100%;
        top: -7px;
      }
    }
  }
`;
