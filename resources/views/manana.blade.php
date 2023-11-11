<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Registro</title>

        <!-- Styles -->
        <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
        <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet">
        <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
        <script src="{{asset('js/bootstrap.bundle.min.js')}}"></script>
        
        <link rel="preconnect" href="https://fonts.bunny.net">
        @viteReactRefresh
        @vite('resources/js/app.js' , 'vendor/courier/build')
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    </head>
    <body class="antialiased">
      <h1>Buenas</h1>
      <!-- <div id="example"></div> -->
      <div id="index"></div>
      <!-- <script src="{{ asset('vendor/laravel/ui/js/app.js') }}"></script> -->
    </body>
</html>