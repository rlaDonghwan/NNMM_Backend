import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from '@/auth/auth.service'
import { SignupDto } from '@/auth/auth.dto'
import { LoginDto } from '@/auth/auth.dto'

@Controller('auth') // 'auth' 경로로 들어오는 요청을 처리하는 컨트롤러로 지정
export class AuthController {
  // AuthService를 의존성 주입받아 사용
  constructor(private readonly authService: AuthService) {}

  // 'POST /auth/signup' 경로로 들어오는 요청을 처리
  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    // 요청의 body 데이터를 SignupDto로 매핑
    return this.authService.signup(dto) // AuthService의 signup 메서드 호출 후 결과 반환
  }
  //----------------------------------------------------------------------------------------------------

  // 'POST /auth/login' 경로로 들어오는 요청을 처리
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto) // AuthService의 login 메서드 호출 후 결과 반환
  }
  //----------------------------------------------------------------------------------------------------
}
