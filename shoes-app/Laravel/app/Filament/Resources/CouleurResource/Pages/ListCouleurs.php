<?php

namespace App\Filament\Resources\CouleurResource\Pages;

use App\Filament\Resources\CouleurResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCouleurs extends ListRecords
{
    protected static string $resource = CouleurResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
