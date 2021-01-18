<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__container space-between">
        <a class="nav__brand" href="/">Moviexfly</a>
        <div class="nav__collapse-item">
          <ul class="nav__list">
            <li><router-link class="nav__link" to="/">Home</router-link></li>
            <li><router-link class="nav__link" to="/movies">Movies</router-link></li>
            <li><router-link class="nav__link" to="/add-movies">Add Movies</router-link></li>
          </ul>
          <div class="nav__toggleMenu">
            <input class="nav__input" type="checkbox" />
            <span class="nav__span"></span>
            <span class="nav__span"></span>
            <span class="nav__span"></span>
            <ul class="nav__toggleMenu__list">
              <li><router-link class="nav__link" to="/">Home</router-link></li>
              <li><router-link class="nav__link" to="/movies">Movies</router-link></li>
              <li><router-link class="nav__link" to="/add-movies">Add Movies</router-link></li>
              <li><router-link class="nav__link" to="/update-movies">Update Movies</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style lang="scss">
$mainColor : #fff;
$pos-r : relative;
$pos-a : absolute;
$z-index:1;
$fullWidth:100%;
.error{
  border:1px solid red
}
.space-between{
  display: flex;
  justify-content: space-between;
}
.header, .footer{
  background: rgba(0,0,0,.4);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  a{
    color:$mainColor;
  }
  .search{
    margin: 0 auto;
    input{
      min-width: 450px;
      padding: 0.375em 0 0.375rem 0.5rem;
      -webkit-box-flex: 1;
      flex-grow: 1;
      color:#000;
      outline: none;
      width: 100%;
      border: 0;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 400;
      letter-spacing: 0.01786em;
      text-decoration: inherit;
      text-transform: inherit;
    }
  }

  .nav {
    padding: 20px;

    &__container {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    &__brand {
      display: inline-block;
      padding-top: .25rem;
      padding-bottom: .25rem;
      margin-right: 1rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: inherit;
      white-space: nowrap;
      text-shadow: 3px 3px 3px #000;
      letter-spacing: -3px;
    }

    &__collapse-item {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }

    &__list {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    &__link {
      position: relative;
      font-size: 1.1rem;
      transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
      margin-right: .5rem;
      padding: .7rem;
      margin-left: .5rem;
      font-weight: 300;
      text-shadow: 2px 2px 2px #000;
      &:before,
      &:after {
        content: "";
        position: absolute;
        transition: inherit;
        border: 1px solid #ffffff3b;

        top: 0;
        width: 0;
        height: 100%;
      }

      &:before {
        right: 0;
        border-left: 0;
        border-right: 0;
      }

      &:after {
        left: 0;
        border-left: 0;
        border-right: 0;
      }

      &:hover, &--active {
        &:before {
          transition-delay: 0s;
          width: 100%;
        }
        &:after {
          transition-delay: 0.35s;
          width: 100%;
        }
      }
    }

    &__toggleMenu {
      display: none;
      position: relative;
      top: 0;
      left: -5px;
      z-index: 1;

      &__input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0;
        z-index: 2;

        &:checked {
          & ~ span {
            opacity: 1;
            transform: rotate(45deg) translate(-2px, -1px);

            &:nth-last-child(3) {
              opacity: 0;
              transform: rotate(0deg) scale(0.2, 0.2);
            }

            &:nth-last-child(2) {
              transform: rotate(-45deg) translate(0, -1px);
            }
          }

          ~ ul {
            transform: translate(-100%, 0);

          }

        }

        &__span {
          display: block;
          width: 33px;
          height: 4px;
          margin-bottom: 5px;
          position: $pos-r;
          background: #fff;
          border-radius: 3px;
          z-index: $z-index;
          transform-origin: 4px 0;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

          &:first-child {
            transform-origin: 0 0;
          }

          &:nth-last-child(2) {
            transform-origin: 0 $fullWidth;
          }
        }
      }
    }
  }
}
</style>