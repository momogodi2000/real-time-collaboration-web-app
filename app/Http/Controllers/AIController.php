<?php

namespace App\Http\Controllers;

use App\Services\OpenAIService;
use Illuminate\Http\Request;

class AIController extends Controller
{
    protected $openAIService;

    public function __construct(OpenAIService $openAIService)
    {
        $this->openAIService = $openAIService;
    }

    public function getSuggestions(Request $request)
    {
        $request->validate([
            'codeSnippet' => 'required|string',
        ]);

        $suggestions = $this->openAIService->getSuggestions($request->codeSnippet);

        return response()->json(['suggestions' => $suggestions]);
    }
}
