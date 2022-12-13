import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

const allVideos = [
	{
		id: 'baby',
		name: 'justin biber baby',
		duration: '4 mins',
		title: 'Baby',
	},
	{
		id: 'company',
		name: 'soul',
		duration: '4 mins',
		title: 'Soul',
	},
	{
		id: 3,
		name: 'outside-the-wire',
		duration: '2 mins',
		title: 'Outside the wire',
	},
	{
		id: 'sorry',
		name: 'soul',
		duration: '4 mins',
		title: 'Soul',
	},
	{
		id: 'kantara',
		name: 'soul',
		duration: '180 mins',
		title: 'Soul',
	},
];

@Injectable()
export class VideoService {
	create(createVideoDto: CreateVideoDto) {
		return 'This action adds a new video';
	}

	findAll() {
		return allVideos;
	}

	findOne(id: number) {
		const video = allVideos.find(video => video.id == id);
		if (video) {
			return video;
		} else {
			return `There is no video with id ${id}`;
		}
	}

	update(id: number, updateVideoDto: UpdateVideoDto) {
		return `This action is not implemented`;
	}

	remove(id: number) {
		return `This action is not implemented`;
	}
}
