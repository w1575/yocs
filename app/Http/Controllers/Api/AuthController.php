<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;
use Illuminate\Validation\ValidationException;


class AuthController extends Controller
{
    /**
     * User auth action
     * @param AuthRequest $request
     * @return array
     * @throws ValidationException
     */
    public function auth(AuthRequest $request)
    {
        $request->validateResolved();

        $user = User::query()
            ->where('email', $request->email)
            ->first()
        ;

        if ($user === null or Hash::check($request->password, $user->password) === false) {
            throw ValidationException::withMessages([
                'email' => 'Неверный e-mail или пароль',

            ]);
        }

        return [
            'token' => $user
                ->createToken($request->device_name)
                ->plainTextToken
        ];


    }
}
