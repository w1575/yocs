<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/auth', function(Request $request) {
    return response()->json([
        'token' => 'test_token'
    ]);
});

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
