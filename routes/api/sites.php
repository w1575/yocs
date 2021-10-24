<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SitesController;

Route::middleware(['auth:sanctum'])->group(function() {

    Route::get(
        '/sites',
        [
            SitesController::class,
            'getList'
        ]
    );

});
