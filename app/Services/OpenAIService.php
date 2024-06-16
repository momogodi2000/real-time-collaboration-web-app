<?php

namespace App\Services;

use OpenAI;

class OpenAIService
{
    protected $client;

    public function __construct()
    {
        $this->client = OpenAI::client(env('OPENAI_API_KEY'));
    }

    public function getSuggestions($codeSnippet)
    {
        $response = $this->client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => "Suggest improvements or bug fixes for the following code:\n\n{$codeSnippet}\n\nSuggestions:",
            'max_tokens' => 150,
        ]);

        return $response['choices'][0]['text'];
    }
}
