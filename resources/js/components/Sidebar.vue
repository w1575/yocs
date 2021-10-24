<template>
    <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <a href="/" id="logo" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5">Y<small class="text-muted">our</small>O<small class="text-muted">wn</small>C<small class="text-muted">omment</small>S<small class="text-muted">ystem</small></span>
        </a>
        <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
               <router-link to="index">
                   <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Главная</span>
               </router-link>
            </li>
            <li>
                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-layout-text-sidebar"></i><span class="ms-1 d-none d-sm-inline">Сайты</span> </a>
            </li>
            <li>
                <a href="#" class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-text-paragraph"></i><span class="ms-1 d-none d-sm-inline">Комментарии</span></a>
            </li>
            <li class="dropdown">
                <a href="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-5 bi-people"></i><span class="ms-1 d-none d-sm-inline">Пользователи</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdown">
                    <li><a class="dropdown-item" href="#">Системы</a></li>
                    <li><a class="dropdown-item" href="#">Комментаторы</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown-logs" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Логи</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdown-logs">
                    <li><a class="dropdown-item" href="#">Системы</a></li>
                    <li><a class="dropdown-item" href="#">Сайтов</a></li>
                </ul>
            </li>
        </ul>
        <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" class="rounded-circle">
                <span class="d-none d-sm-inline mx-1">Joe</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped lang="scss">
    #logo {
        small {
            display: none;
        }
        &:hover {
            small {
                display: inline;
            }
        }
    }
</style>
