import { IsNotEmpty } from 'class-validator';
import { IsNumber, IsString } from 'class-validator';

export class CreateAddonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber(
    {},
    {
      message: 'price must be number',
    },
  )
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;
}
