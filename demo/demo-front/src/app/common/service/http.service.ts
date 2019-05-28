import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestOptionsArgs, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/Rx'

@Injectable()
export class HttpService {

  constructor(private http: Http, public router: Router) {
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.request(url, this.getRequestOptionArgs(options)));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.get(url, this.getRequestOptionArgs(options)));
  }

  post(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options)));
  }

  patch(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.patch(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    // return this.intercept(this.http.delete(url, body, this.getRequestOptionArgs(options)));
    return this.http.delete(url, options);
  }

  public extractData(response: Response) {
    return response.json() || null;
  }

  getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');

    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth'));
      options.headers.append('Authorization', 'Bearer ' + auth.token);
    }

    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: any, source: any) => {
      return this.onSubscribeError(error);
    });
  }

  private onSubscribeSuccess(response: Response): void {
    // this.loggerService.log('onSubscribeSuccess : ' + response.status);
    // this.notificationService.info('Http : ' + response.status, 'Http');
  }

  public onSubscribeError(error: Response): Observable<Response> {
    // this.loggerService.log('onSubscribeError : ' + error);
    // console.log('error', error);


    if (error.status === 0) {
      console.log('error', error);
      return Observable.empty();
    } else if (error.status  === 401) {
      this.router.navigate(['/login']);
      return Observable.empty();
    } else if (error.status  === 410) {
      // this.notificationService.error('Wrong user or password', 'User not found');
      return Observable.empty();
    } else {
      // this.notificationService.error('Http error ' + error.status, 'Http error');
      return Observable.throw(error);
    }
  }

  private requestInterceptor(): void {
    // this.loggerService.log('requestInterceptor');
  }

  private responseInterceptor(): void {
    // this.loggerService.log('responseInterceptor');
  }

}