self.addEventListener('push',e=>{
  const d=e.data?e.data.json():{title:'HABITS 365',body:"Don't break your streak. Check in now. 🔒"};
  e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'/icon.png',badge:'/icon.png',tag:'daily-checkin',renotify:true}));
});
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',()=>self.clients.claim());
