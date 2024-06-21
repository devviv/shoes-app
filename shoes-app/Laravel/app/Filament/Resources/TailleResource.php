<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TailleResource\Pages;
use App\Filament\Resources\TailleResource\RelationManagers;
use App\Models\Taille;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TailleResource extends Resource
{
    protected static ?string $model = Taille::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nom')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('couleur_id')
                    ->label('Couleur')
                    ->required()
                    ->relationship('couleur', 'nom'),
                Forms\Components\Select::make('shoe_id')
                    ->label('Chaussure')
                    ->required()
                    ->relationship('shoe', 'nom'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('couleur.nom')
                    ->label('Couleur')
                    ->sortable(),
                Tables\Columns\TextColumn::make('shoe.nom')
                    ->label('Chaussure')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTailles::route('/'),
            'create' => Pages\CreateTaille::route('/create'),
            'edit' => Pages\EditTaille::route('/{record}/edit'),
        ];
    }
}
