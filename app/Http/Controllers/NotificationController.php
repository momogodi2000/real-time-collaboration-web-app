<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    protected $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function getNotifications()
    {
        return response()->json($this->notificationService->getNotifications());
    }

    public function markAsRead($id)
    {
        $this->notificationService->markAsRead($id);
        return response()->json(['message' => 'Notification marked as read.']);
    }
}

