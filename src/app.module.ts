import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicaModule } from './musica/musica.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './usuarios/usuarios.service';
import { MusicaService } from './musica/musica.service';
import { MusicaController } from './musica/musica.controller';
import { UsuariosController } from './usuarios/usuarios.controller';


@Module({
  imports: [MusicaModule, UsuariosModule],
  controllers: [AppController, MusicaController, UsuariosController],
  providers: [AppService, UsuariosService, MusicaService],
})
export class AppModule {}
