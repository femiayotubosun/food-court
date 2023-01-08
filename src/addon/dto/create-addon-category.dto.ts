import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAddonCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
