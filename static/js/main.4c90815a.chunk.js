(window.webpackJsonpdump_it=window.webpackJsonpdump_it||[]).push([[0],{51:function(e,t,a){e.exports=a.p+"static/media/logo1.f2db32f6.png"},52:function(e,t,a){e.exports=a(94)},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){e.exports={buttonOption:"ButtonOption_buttonOption__r4X4B"}},66:function(e,t,a){},67:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),i=a.n(r),l=(a(57),a(9)),c=a(10),s=a(13),u=a(11),m=a(15),d=a(12),p=(a(58),a(7)),h=a(18),g=a(44),b=a.n(g),E=a(96),v=a(97),f=(a(59),a(60),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={imageUrl:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onTakePhoto",value:function(e){this.setState({imageUrl:e}),this.props.history.push({pathname:"/result",data:{imageUrl:e}})}},{key:"onCameraError",value:function(e){console.error("onCameraError",e)}},{key:"onCameraStart",value:function(e){console.log("onCameraStart")}},{key:"onCameraStop",value:function(){console.log("onCameraStop")}},{key:"render",value:function(){var e=this;return o.a.createElement(E.a,null,o.a.createElement("div",{className:"options"},o.a.createElement(p.b,{to:"/"},o.a.createElement(v.a,{variant:"secondary"},"Go Back"))),o.a.createElement("h1",{style:{textAlign:"center",margin:"15px"}},"Please take a picture of your object"),o.a.createElement("div",{id:"cam",className:"camera"},o.a.createElement(b.a,{onTakePhoto:function(t){e.onTakePhoto(t)}})))}}]),t}(n.Component)),y=a(99),k=a(98),O=(a(65),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.route;return o.a.createElement("div",{className:"buttonOption"},o.a.createElement(p.b,{to:a},o.a.createElement(k.a,{className:"main-btn mt-3",size:"lg",block:!0},t)))}}]),t}(n.Component)),j=(a(66),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement("div",{className:"options"},o.a.createElement(O,{title:"Home",route:"/"}),o.a.createElement(O,{title:"Take a Snap",route:"/camera"}),o.a.createElement(O,{title:"Nearest Location",route:"/location"})))}}]),t}(n.Component)),N=a(107),C=a(100),V=(a(67),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={imageUrl:null,predictions:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"callApi",value:function(e){return fetch("https://northcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/3aae5557-2969-47c8-a0ff-58c925bb8f6d/classify/iterations/recycle_cam/image",{method:"POST",headers:{"Content-Type":"application/octet-stream","Prediction-Key":"e03e4c248dae4e5e92d6f9c7de167ad8"},body:e}).then((function(e){return e.json()}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.location.data;t&&(this.setState({imageUrl:t.imageUrl}),fetch(t.imageUrl).then((function(e){return e.blob()})).then((function(t){return e.callApi(t)})).then((function(t){return e.setState({predictions:t.predictions})})))}},{key:"findTypeWaste",value:function(e){if(e){for(var t=0,a={},n=0;n<e.length;n++){var o=e[n].probability;o>t&&(t=o,a=e[n])}return a}return null}},{key:"render",value:function(){var e=this.state,t=e.imageUrl,a=e.predictions,n=this.findTypeWaste(a);return console.log(n),console.log(a),t?o.a.createElement("div",{className:"container",style:{marginTop:"20px",textAlign:"center"}},o.a.createElement("img",{style:{width:"60%",border:"2px solid black",borderRadius:"10px"},className:"mr-3",src:t,alt:"Generic placeholder"}),o.a.createElement(C.a.Body,null,o.a.createElement("h2",{style:{margin:"0 auto",marginTop:"0.5em"}},n.tagName)),o.a.createElement("div",{className:"buttons",style:{marginTop:"20px"}},o.a.createElement(p.b,{to:"/"},o.a.createElement(v.a,{variant:"light",size:"lg"},"Back to home")," "),o.a.createElement(p.b,{to:"/camera"},o.a.createElement(v.a,{variant:"light",size:"lg"},"Take other snap")))):o.a.createElement(N.a,{variant:"danger"},o.a.createElement(N.a.Heading,null,"Oh snap! You got an error!"),o.a.createElement("p",null,"There is no image. Please take a new one!"),o.a.createElement("div",{className:"buttons"},o.a.createElement(p.b,{to:"/"},o.a.createElement(v.a,{variant:"light",size:"lg"},"Back to home")," "),o.a.createElement(p.b,{to:"/camera"},o.a.createElement(v.a,{variant:"light",size:"lg"},"Take other snap"))))}}]),t}(n.Component)),_=a(33),x=a.n(_),L=a(50),U=a(22),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getRecyclingCenter=function(){var e=Object(L.a)(x.a.mark((function e(t){var n,o,r,i,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.getMyLocation(),console.log("User's Latitude: "+a.state.userLatitude),console.log("User's Longitude: "+a.state.userLongitude),n="4ecb2867973c953f",e.next=7,fetch("https://cors-anywhere.herokuapp.com/http://api.earth911.com/earth911.searchLocations?api_key=".concat(n,"&latitude=").concat(a.state.userLatitude,"&longitude=").concat(a.state.userLongitude,"&max_distance=5"));case 7:return o=e.sent,e.next=10,o.json();case 10:if(!(r=e.sent).result){e.next=22;break}return a.setState({curbside:r.result[0].curbside,description:r.result[0].description,distance:r.result[0].distance,latitude:r.result[0].latitude,location_id:r.result[0].location_id,location_type_id:r.result[0].location_type_id,longitude:r.result[0].longitude,municipal:r.result[0].municipal}),e.next=15,fetch("https://cors-anywhere.herokuapp.com/http://api.earth911.com/earth911.getLocationDetails?api_key=".concat(n,"&location_id=").concat(a.state.location_id));case 15:return i=e.sent,e.next=18,i.json();case 18:l=e.sent,console.log(r),console.log(l.result.Q1RQNVVfWV1DUA.address),a.setState({address:l.result.Q1RQNVVfWV1DUA.address,phone:l.result.Q1RQNVVfWV1DUA.phone,postal_code:l.result.Q1RQNVVfWV1DUA.postal_code,province:l.result.Q1RQNVVfWV1DUA.province,region:l.result.Q1RQNVVfWV1DUA.region,city:l.result.Q1RQNVVfWV1DUA.city,country:l.result.Q1RQNVVfWV1DUA.country,hours:l.result.Q1RQNVVfWV1DUA.hours});case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={userLatitude:void 0,userLongitude:void 0,curbside:void 0,description:void 0,distance:void 0,latitude:void 0,location_id:void 0,location_type_id:void 0,longitude:void 0,municipal:void 0,address:void 0,phone:void 0,postal_code:void 0,province:void 0,region:void 0,city:void 0,country:void 0,hours:void 0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getMyLocation",value:function(){var e=this,t=navigator&&navigator.geolocation;t&&t.getCurrentPosition((function(t){e.setState({userLatitude:t.coords.latitude,userLongitude:t.coords.longitude})}),(function(t){e.setState({latitude:"err-latitude",longitude:"err-longitude"})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-component"},o.a.createElement(k.a,{color:"primary",type:"button",onClick:this.getRecyclingCenter},"Get Nearest Recycling Center"),this.state.description&&o.a.createElement("p",null,o.a.createElement("b",null,"Location:")," ",this.state.description),this.state.phone&&o.a.createElement("p",null,o.a.createElement("b",null,"Phone:")," ",this.state.phone),this.state.address&&o.a.createElement("p",null,o.a.createElement("b",null,"Address:")," ",this.state.address),this.state.postal_code&&o.a.createElement("p",null,o.a.createElement("b",null,"Postal Code:")," ",this.state.postal_code),this.state.province&&o.a.createElement("p",null,o.a.createElement("b",null,"Province:")," ",this.state.province),this.state.region&&o.a.createElement("p",null,o.a.createElement("b",null,"Region:")," ",this.state.region),this.state.city&&o.a.createElement("p",null,o.a.createElement("b",null,"City:")," ",this.state.city),this.state.country&&o.a.createElement("p",null,o.a.createElement("b",null,"Country:")," ",this.state.country),this.state.hours&&o.a.createElement("p",null,o.a.createElement("b",null,"Hours:")," ",this.state.hours),this.state.latitude&&this.state.longitude&&o.a.createElement(U.Map,{google:this.props.google,zoom:8,initialCenter:{lat:this.state.latitude,lng:this.state.longitude}},o.a.createElement(U.Marker,{position:{lat:this.state.latitude,lng:this.state.longitude}}),o.a.createElement(U.InfoWindow,{onClose:this.onInfoWindowClose},o.a.createElement("div",null,o.a.createElement("h1",null,this.state.description)))))}}]),t}(n.Component),Q=(Object(U.GoogleApiWrapper)({apiKey:"AIzaSyCNdwUwa_CZI9dyunvZFeo-Bpx7dLuh3l4"})(w),a(51)),A=a.n(Q),R=(a(39),a(101)),S=a(102),P=a(103),T=a(108),W=a(104),D=a(105),B=a(106),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(m.a)(a)),a.state={collapsed:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(R.a,{class:"navbar",dark:!0},o.a.createElement(S.a,{onClick:this.toggleNavbar,className:"hi"}),o.a.createElement(p.b,{to:"/",style:{color:"white"}},o.a.createElement(P.a,{className:"navbar-brand text-center"},"RECYCLE CAM",o.a.createElement("img",{class:"logo",src:A.a,style:{width:50},alt:"Logo"}))),o.a.createElement(T.a,{isOpen:!this.state.collapsed,navbar:!0},o.a.createElement(W.a,{navbar:!0},o.a.createElement(D.a,null,o.a.createElement(B.a,{className:"text-center mr-auto"},o.a.createElement(p.b,{class:"link",to:"/"},"Home Page"))),o.a.createElement(D.a,null,o.a.createElement(B.a,{className:"text-center mr-auto"},o.a.createElement(p.b,{class:"link",to:"/camera"},"Camera Page"))),o.a.createElement(D.a,null,o.a.createElement(B.a,{className:"text-center mr-auto"},o.a.createElement(p.b,{class:"link",to:"/location"},"Location")))))),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:j}),o.a.createElement(h.a,{path:"/camera",component:f}),o.a.createElement(h.a,{path:"/result",component:V}),o.a.createElement(h.a,{path:"/location",component:w})))}}]),t}(o.a.Component);i.a.render(o.a.createElement(p.a,null,o.a.createElement(z,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4c90815a.chunk.js.map