"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5751],{5751:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(9439),a=n(7313),r=n(3962),c=n(6085),i=n(6417);var l=function(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[(0,i.jsx)("div",{className:"input-group-prepend",children:(0,i.jsx)("span",{className:"input-group-text text-white bg-dark",children:e.Name})}),(0,i.jsx)("input",{type:"text",className:"form-control text-white bg-dark",onChange:e.e})]})})},o=n(1590),u=n(9128);var d=function(){var e={Status:[{Username:"",FirstName:"",LastName:"",Permissions:"",Email:"",ID:"",Image:"",Password:"",Banned:!1}]},t={Username:"",FirstName:"",LastName:"",Permissions:"",Email:"",Image:"",Password:""},n={Next:0,Query:""},d=(0,a.useState)(e),m=(0,s.Z)(d,2),h=m[0],x=m[1];(0,a.useEffect)((function(){N()}),[]);var j=a.useCallback((function(){n.Next=n.Next+1,N()}),[]),f=a.useCallback((function(e){n.Query=e.currentTarget.value,N()}),[]),p=a.useCallback((function(){o.Z.ahutRqst("".concat(r.wN).concat(r.MF.wt[0].Jv),void 0,{method:"POST",body:JSON.stringify(t)}).then((function(e){return 200===e.status?N():c.Z.errorDefaultToast("Error Creando la cuenta")})).catch((function(e){return c.Z.errorDefaultToast(e)}))}),[]),N=function(){o.Z.ahutRqst("".concat(r.wN).concat(r.MF.n5[0].A1,"?next=").concat(n.Next,"&Username=").concat(encodeURIComponent(n.Query))).then((function(e){return(0,u.q)(e)})).then((function(t){null!==t.Status?x(t):x(e)})).catch((function(e){c.Z.errorDefaultToast(e)}))};return(0,i.jsxs)("div",{className:"pr-4 w-100",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("span",{className:"material-icons",children:"settings"}),"User management"]}),(0,i.jsx)("div",{className:"",children:(0,i.jsxs)("div",{className:"pt-2 pb-1",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h6",{children:"List of users "})}),(0,i.jsx)("div",{className:"p-4",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("div",{className:"input-group-prepend",children:(0,i.jsx)("span",{className:"input-group-text bg-dark text-muted",id:"",children:"Username"})}),(0,i.jsx)("input",{type:"text",className:"form-control bg-dark text-light ",onChange:f})]})}),(0,i.jsx)("div",{className:""}),(0,i.jsx)("div",{className:"table-responsive rounded",children:(0,i.jsxs)("table",{className:"table table-dark",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",children:"ID"}),(0,i.jsx)("th",{scope:"col",children:"Username"}),(0,i.jsx)("th",{scope:"col",children:"Permissions"}),(0,i.jsx)("th",{scope:"col",children:"Email"}),(0,i.jsx)("th",{scope:"col",children:"Banned"}),(0,i.jsx)("th",{scope:"col",children:"Actions"})]})}),(0,i.jsx)("tbody",{children:h.Status.map((function(e,t){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:e.ID}),(0,i.jsx)("td",{children:e.Username}),(0,i.jsx)("td",{children:e.Permissions}),(0,i.jsx)("td",{children:e.Email}),(0,i.jsx)("td",{children:e.Banned?"true":"false"}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"d-flex flex-row",children:[(0,i.jsx)("div",{className:"p-1",children:(0,i.jsx)("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){!function(e,t){var n=r.wN+r.MF.wt[0].Kg;e&&(n=r.wN+r.MF.wt[0].MW),o.Z.ahutRqst("".concat(n,"/").concat(t)).then((function(e){e.json().then((function(){N()}))})).catch((function(){c.Z.errorDefaultToast("Error trying to ban the user")}))}(e.Banned,e.ID)},children:e.Banned?"Unban":"Ban"})}),(0,i.jsx)("div",{className:"p-1",children:(0,i.jsx)("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){var t;t=e.ID,o.Z.ahutRqst("".concat(r.wN+r.MF.wt[0].Lf,"/").concat(t)).then((function(e){return 200===e.status?N():c.Z.errorDefaultToast("Error Eliminando la cuenta")})).catch((function(e){return c.Z.errorDefaultToast(e)}))},children:"Delate Account"})})]})})]},t)}))}),(0,i.jsx)("button",{className:"btn btn-primary  text-info btn-block mt-2",onClick:j,children:"Next page"})]})}),(0,i.jsxs)("div",{className:"p-5",children:[(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Create user"})}),(0,i.jsx)(l,{Name:"First Name",e:a.useCallback((function(e){t.FirstName=e.target.value}),[])}),(0,i.jsx)(l,{Name:"Last Name",e:a.useCallback((function(e){t.LastName=e.target.value}),[])}),(0,i.jsx)(l,{Name:"Username",e:a.useCallback((function(e){t.Username=e.target.value}),[])}),(0,i.jsx)(l,{Name:"Image",e:a.useCallback((function(e){t.Image=e.target.value}),[])}),(0,i.jsx)(l,{Name:"Password",e:a.useCallback((function(e){t.Password=e.target.value}),[])}),(0,i.jsx)(l,{Name:"Permissions",e:a.useCallback((function(e){t.Permissions=e.target.value}),[])}),(0,i.jsx)(l,{Name:"Email",e:a.useCallback((function(e){t.Email=e.target.value}),[])}),(0,i.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:p,children:"Create user"})]})]})})]})}}}]);