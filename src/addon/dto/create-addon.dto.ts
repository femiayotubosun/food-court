import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsNumber, IsString } from 'class-validator';

export class CreateAddonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber(
    {},
    {
      message: 'price must be number',
    },
  )
  price: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category: string;
}
