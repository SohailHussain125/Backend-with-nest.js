import { Injectable ,HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable ,lastValueFrom } from 'rxjs';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Injectable()
export class ProductService {
    product = [
        {
            id: "1",
            name: "Mobile"
        },
        {
            id: "2",
            name: "Mobile X"
        }
    ]
    constructor(private httpService: HttpService,
        private authService:AuthenticationService
        ) { }

    async getAllProduct() {        
        try {
            const customer = await lastValueFrom(await this.getAllCustomer());
            let customerAndProduct = this.product.map(obj => ({ ...obj, customer:customer.data }))
            return customerAndProduct;
            
        } catch (error) {
            console.log(error)
            throw new HttpException({
                message: error.message
              }, HttpStatus.BAD_REQUEST);
        }
    }

    async getAllCustomer(): Promise<Observable<any>>  {
       let loginResponse=await this.authService.login({
            username:"khan.khan",
            password:"Khan@123"
        })                
        this.httpService.axiosRef.interceptors.request.use(request => {
            request.headers = {
                ...request.headers,
                Authorization: `Bearer ${loginResponse.access_token}` || '',
            };
            return request;
        });
        const response =  this.httpService.get('http://localhost:4000/customer/all').pipe();
        return response;

    }

}
