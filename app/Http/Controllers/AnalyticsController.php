<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function getProjectAnalytics($projectId)
    {
        $totalTasks = Task::where('project_id', $projectId)->count();
        $completedTasks = Task::where('project_id', $projectId)->where('status', 'completed')->count();
        $pendingTasks = Task::where('project_id', $projectId)->where('status', 'pending')->count();

        return response()->json([
            'totalTasks' => $totalTasks,
            'completedTasks' => $completedTasks,
            'pendingTasks' => $pendingTasks,
        ]);
    }
}

