export interface Todo { //Servira à typer (modele) (L'export permet d'utiliser 'import' la ou l'on a besoin de l'interface)
    id?: number | null; // Chaque todo aura un id de type number OU null et celui ci ne sra pas obligatoire (?:)
    title: string;
    category: string;
    description: string;
}