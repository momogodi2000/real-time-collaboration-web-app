<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AIController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\AnalyticsController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::post('/ai/suggestions', [AIController::class, 'getSuggestions'])->middleware('auth:sanctum');

Route::get('/notifications', [NotificationController::class, 'getNotifications'])->middleware('auth:sanctum');
Route::patch('/notifications/{id}', [NotificationController::class, 'markAsRead'])->middleware('auth:sanctum');

Route::get('/analytics/project/{id}', [AnalyticsController::class, 'getProjectAnalytics'])->middleware('auth:sanctum');
