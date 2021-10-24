<?php
/**
 * Class SitesController
 * @package App\Http\Controllers\Api
 */

namespace App\Http\Controllers\Api;

use Illuminate\Http\Client\Request;

class SitesController extends \App\Http\Controllers\Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getList(Request $request)
    {
        return response()->json([
            'data' => [
                [
                    "id" => 1,
                    "name" => 'Site1',
                    "domain" => 'site1.com',
                    "https" => 1,
                    "creator" => [
                        'id' => 0,
                        'name' => "Super User"
                    ],
                    "description" => "Test info 1",
                    "status" => 1,
                ],
                [
                    "id" => 2,
                    "name" => 'Site2',
                    "domain" => 'site2.com',
                    "https" => 0,
                    "creator" => [
                        'id' => 0,
                        'name' => "Manager 1"
                    ],
                    "description" => "Test info 2",
                    "status" => 0,
                ]
            ]
        ]);
    }
}
