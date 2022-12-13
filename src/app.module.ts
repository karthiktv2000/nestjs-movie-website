import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { VideoModule } from './video/video.module';

@Module({
	imports: [VideoModule,ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public'),
	  })],
	controllers: [],
	providers: [],
})
export class AppModule {}
