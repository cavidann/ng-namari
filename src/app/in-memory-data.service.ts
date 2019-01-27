import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 11, firstName: 'cavidan', lastName: 'talibov', email: 'tcavidan.p301@code.edu.az', password: '5358585Ca',
    bio: 'this is my bio', role: 'admin', image: 'user-1.jpg'},
      { id: 12, firstName: 'Narmina', lastName: 'talibov', email: 'narmina@code.edu.az', password: '5358585Ne',
      bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg'}
    ];

    const menu = [
      {id: 1, title: 'Home', link: '/Home'},
      {id: 2, title: 'About', link: '/About'},
      {id: 3, title: 'Gallery', link: '/Gallery'},
      {id: 4, title: 'Services', link: '/Services'},
      {id: 5, title: 'Testimoinals', link: '/Testimoinals'},
      {id: 6, title: 'Clients', link: '/Clients'},
      {id: 7, title: 'Pricing', link: '/Pricing'},
      {id: 7, title: 'Blog', link: '/Blog'}
    ];

    const posts = [
      {id: 1, title: 'The first article',
      author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 2, title: 'The second article',
      author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 3, title: 'The third article',
      author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 4, title: 'The fourth article',
      author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 5, title: 'The fifth article',
      author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 6, title: 'The sixth article',
      author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 7, title: 'The seven article',
      author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 8, title: 'The eight article',
      author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 9, title: 'The nine article',
      author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 10, title: 'The ten article',
      author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'},
      {id: 11, title: 'The eleventh article',
      author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2028-04-23T18:25:43.511Z',
      excert: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde.'}
    ];
    return {users, posts, menu};
  }

  getToken(user) {
    return 'this is a token';
  }

  get (reqInfo: RequestInfo) {
    console.log(reqInfo.collectionName);

    if (reqInfo.collectionName === 'posts') {
      return this.getArticles(reqInfo);
    }
    return undefined;
  }

  getArticles(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const collection = reqInfo.collection;
      const id = reqInfo.id;
      const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

      console.log(data);

      const options: ResponseOptions = data ?
      {
        body: dataEncapsulation ? { data } : data,
        status: 200
      } :
      {
        body: { error: `Post not found` },
        status: 404
      };

      options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
      options.headers = reqInfo.headers;
      options.url = reqInfo.url;
      return options;

    });
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.id === 'Login') {
      console.log('from Login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(usr => {
          return reqInfo.req['body'].email === usr.email && reqInfo.req['body'].password === usr.password;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            bio: users.bio,
            image: users.image,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `User with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;

      });

    } else if (reqInfo.id === 'Signup') {
      reqInfo.id = null;
      console.log('from Signup');
    }
  }

}
