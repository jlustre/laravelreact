<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Notifications\WelcomeEmailNotification; // Ensure this class exists in the specified namespace
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => [
                'required',
                'string',
                'max:30',
                'unique:'.User::class,
                'not_in:'.$request->email,
                'regex:/^[a-zA-Z0-9_]+$/', // Only allow alphanumeric characters and underscores
            ],

            'sponsor' => [
                        'required',
                        function ($attribute, $value, $fail) {
                            $sponsor = User::where('username', $value)->first();
                            if (!$sponsor) {
                                $fail('The selected sponsor does not exist.');
                            } elseif ($sponsor->active_status !== 1) {
                                $fail('The selected sponsor is not active.');
                            }
                        },
                    ],
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults(), 'confirmed'],
        ]);

        // $sponsor_id = User::where('username', $request->sponsor)->first()->id;

        // if ($sponsor_id === null) {
        //     return back()->withErrors(['sponsor' => 'Sponsor not found.']);
        // }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'sponsor' => $request->sponsor,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        // Send welcome email
        $user->notify(new WelcomeEmailNotification());

        Auth::login($user);

        return to_route('dashboard');
    }
}
