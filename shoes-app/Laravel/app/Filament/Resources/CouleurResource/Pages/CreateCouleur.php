<?php

namespace App\Filament\Resources\CouleurResource\Pages;

use App\Filament\Resources\CouleurResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateCouleur extends CreateRecord
{
    protected static string $resource = CouleurResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
