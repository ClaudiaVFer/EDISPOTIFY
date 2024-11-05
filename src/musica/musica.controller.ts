import { Controller,Get,Post,Param,Body,Delete,Put } from '@nestjs/common';
import { MusicaService } from "./musica.service";
import {CancionesModel}  from "./musica.model";

@Controller('musica')
export class MusicaController {
constructor (private readonly musicaService: MusicaService) {}

    @Get()
    getmusica() {
        return this. musicaService.getMusica();
    }

    @Get(':id')
    getmusicaById( @Param('id') id:string ) {
        return this.musicaService.getMusicaById( Number( id ) );
    }
    
    @Get('/name/:name')
    getmusicaByName( @Param('name') name:string ) {
        return this.musicaService.getMusicaByName( name );
    }
    @Get('/artist/:artista')
    getmusicaByArtista( @Param('artista') artista:string ) {
        return this.musicaService.getMusicaByArtista( artista );
    }
    @Post() 
    postMusica (@Body() newMusica:CancionesModel) {
        return this.musicaService.postMusica( newMusica );
    }
        
    @Put(":id")
    putMusica( @Body() putmusica, @Param("id") id:string ): boolean {
        return this.musicaService.putMusica( putmusica, Number(id) );
    }

    @Delete(":id")
    deleteMusica( @Param("id") id:string) : boolean {
        return this.musicaService.deleteMusica ( Number(id) );
    }
}
    