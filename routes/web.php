<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {return Inertia::render('welcome');})->name('home');
Route::get('/terms', function () {return Inertia::render('terms');})->name('terms');
Route::get('/privacy', function () {return Inertia::render('privacy');})->name('privacy');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
