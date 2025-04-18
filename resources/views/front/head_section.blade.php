<head>
    <meta charset="utf-8">
    <title inertia>{{ config('app.name', 'Wealth Legacy Alliance') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta content="Minimal Admin & Dashboard Template" name="description">
    <meta content="Themesdesign" name="author">
    <!-- App favicon -->
    <link rel="shortcut icon" href="./assets/images/favicon.ico">
    <!-- Layout config Js -->
    <script src="assets/js/layout.js"></script>
    <!-- Icons CSS -->

    <!-- Tailwind CSS -->
    <link rel="stylesheet" href="./assets/css/tailwind2.css">
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
