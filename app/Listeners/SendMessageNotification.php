<?php

namespace App\Listeners;

use App\Events\MessageSent;

class SendMessageNotification
{
    public function handle(MessageSent $event)
    {
        // Handle the event (e.g., notify users, update database, etc.)
    }
}
