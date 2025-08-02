import { HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export const authinterceptor: HttpInterceptorFn 
= (req: HttpRequest<any>, next: HttpHandlerFn)
: Observable<HttpEvent<any>> => {
    let modifiReq = req
    if (req.method == "POST") {
        modifiReq = req.clone({
            headers: req.headers.append("Content-Type", "application/json")
        })
        console.log(modifiReq);

    }

    return next(modifiReq).pipe(
        tap((event) => {
            if (event.type == HttpEventType.Response) {

                if (event.status == 200) {

                }
                if (event.status == 500) {

                } if (event.status == 400) {

                }
            }
        })

    );
};