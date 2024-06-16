<?php

namespace App\Services;

use App\Models\Notification;
use Illuminate\Support\Facades\Auth;

class NotificationService
{
    public function sendNotification($userId, $message)
    {
        Notification::create([
            'user_id' => $userId,
            'message' => $message,
        ]);
    }

    public function getNotifications()
    {
        return Notification::where('user_id', Auth::id())
            ->whereNull('read_at')
            ->get();
    }

    public function markAsRead($notificationId)
    {
        $notification = Notification::find($notificationId);
        $notification->update(['read_at' => now()]);
    }
}
