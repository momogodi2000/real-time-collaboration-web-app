<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Foundation\Support\Providers\BroadcastServiceProvider as ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Broadcast::routes(['middleware' => ['auth:sanctum']]);
        require base_path('routes/channels.php');
    }
}
