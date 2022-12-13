import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
	imports:[ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public'),
	  })],
	controllers: [VideoController],
	providers: [VideoService],
})
export class VideoModule {}
