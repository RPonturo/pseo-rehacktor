<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

-   **[Vehikl](https://vehikl.com/)**
-   **[Tighten Co.](https://tighten.co)**
-   **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
-   **[64 Robots](https://64robots.com)**
-   **[Cubet Techno Labs](https://cubettech.com)**
-   **[Cyber-Duck](https://cyber-duck.co.uk)**
-   **[Many](https://www.many.co.uk)**
-   **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
-   **[DevSquad](https://devsquad.com)**
-   **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
-   **[OP.GG](https://op.gg)**
-   **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
-   **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## API calls examples

### register

http POST http://localhost:8000/api/users/register name=Raffaele email=rponturo@enpab.it password=12345678 password_confirmation=12345678

### login

http POST http://localhost:8000/api/users/login email=rponturo@enpab.it password=12345678

### logout

http POST http://localhost:8000/api/users/logout "Authorization:Bearer eyJ...sU2E"

### user profile

http GET http://localhost:8000/api/users/view-profile "Authorization:Bearer eyJ...9Kk"

### create new room

http POST http://localhost:8000/api/users/room game_id=35 game_name=zelda max_seats_available=4 "Authorization:Bearer eyJ...9Kk"

### close room

http POST http://localhost:8000/api/users/room/close "Authorization:Bearer eyJ...9Kk"

### join room

http POST http://localhost:8000/api/users/room/join room_id=6 "Authorization:Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QyZTE4NmVlYmVhNTZjYzRjODBlYjBhM2M5NWExZTYwNzExZTAzN2M4NDBiNjk5ZmU2YThlNWU1M2E5ZmQ4ZTUxYTdiYjgwOTU3M2IwY2MiLCJpYXQiOjE2OTMwNDYxODUuMDkwNTQ1LCJuYmYiOjE2OTMwNDYxODUuMDkwNTQ5LCJleHAiOjE3MjQ2Njg1ODUuMDc5NzkzLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.c8biwaNGf-JhL1T4M0BPMfudmzkGMI-u6UDi1hBJplBwXztd8lZmWANDguHL3L02fMZvQoJD2f9KecuQaUwpASw4EkxBQ7X9d5jb9wXesN8UCs2E83Q2JfW-gsoMvP3cNc-VaMClichMC9Nq4jtGflja9-vBYf9BQqphN1jmgqp3jHDc4auuY6B0H53NjGcBHkDNkamtoifbZuWmZU0qvaZJj4f0cwF-Xfe2hZrQ3L_3H9Q3mHcsyHDm-rZAasJKYhEHbXk_HcGOBKp6Sn4ooGS0iNlY1boWvFmoTB5gC6K2yQcYPUE6vd4JlSm342c8jEK_xNJs5Ui_7pD6rgR3OgOwXMxTe6vpi9NmZFKO3aYCSZ2IBRWyHf4Mva0jBbs3Zge7Au3bBjgeslCdI_6mkm_591kljxf8BxPcl1i0KVuiEBEiuRgPyBSKTu3Rq3OFxkNXk9ABk9siEH9gmbTqhwpGMDPzSHy5u2KLG1FqDmSB9bwjROEtTmBvI8xC2Cl3WWu6Kbbaxxqak6PgU3QuC36zNwVKhzUVTG1bYXMkALrvKANkLROhlMnlKrAjh-GxXnPodGpX8zM8JTHRvBfyPSlxqD2E3Uye-5ycPHEvrvWaiPrZoQqftqBKQVmzsIUEApdeSaphaknznqMfaipq2b5-3EkCZDmRR0X92-KGa3M"

### streamerInfo

http GET http://localhost:8000/api/users/room/streamer/3 "Authorization:Bearer eyJ...9Kk"

### roomsActive

http GET http://localhost:8000/api/users/room/roomsActive

### roomsByGame

http GET http://localhost:8000/api/users/room/roomsByGame?game_id=35

### countUsers

http GET http://localhost:8000/api/users/count
