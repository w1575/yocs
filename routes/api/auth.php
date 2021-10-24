<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::post(
    '/auth',
    [
        AuthController::class,
        'auth'
    ]
);

Route::post('/logout', function() {
    return response()->json([

    ]);
});

Route::post('/register', function(){
    return response()->json(
        [
            'message' => __('auth.reg_success'),
        ]
    );
});

Route::post('/resend', function(){
    return response()->json(
        [
            'message' => __('auth.confirm_resent'),
        ]
    );
});

Route::post('/reset', function() {
    return response()->json([
        'message' => __('auth.reset_password'),
    ]);
});
