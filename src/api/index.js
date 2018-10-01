import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export const data$ = url => ajax(url).pipe(map(r => r.response));
