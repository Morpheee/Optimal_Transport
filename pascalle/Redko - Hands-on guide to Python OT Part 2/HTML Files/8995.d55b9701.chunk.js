(self.webpackChunklite=self.webpackChunklite||[]).push([[8995],{54415:(e,n,t)=>{"use strict";t.d(n,{v:()=>c,G:()=>m});var l=t(28655),r=t.n(l),o=t(71439),i=t(67294),a=t(73882),u=t(98281);function s(){var e=r()(["\n  fragment PublisherAvatar_publisher on Publisher {\n    __typename\n    ... on Collection {\n      id\n      ...CollectionAvatar_collection\n    }\n    ... on User {\n      id\n      ...UserAvatar_user\n    }\n  }\n  ","\n  ","\n"]);return s=function(){return e},e}var c=(0,o.Ps)(s(),a.d,u.WQ),m=function(e){var n=e.link,t=void 0!==n&&n,l=e.scale,r=void 0===l?"M":l,o=e.publisher;switch(o.__typename){case"User":return i.createElement(u.ZP,{link:t,scale:r,user:o});case"Collection":return i.createElement(a.v,{link:t,size:u.wC[r],collection:o});default:return null}}},97297:(e,n,t)=>{"use strict";t.d(n,{gp:()=>d,DX:()=>p,b5:()=>f});var l=t(28655),r=t.n(l),o=t(71439),i=t(67294),a=t(22091),u=t(64504),s=t(27390),c=t(27952);function m(){var e=r()(["\n  fragment PublisherFollowingCount_publisher on Publisher {\n    __typename\n    id\n    ... on User {\n      socialStats {\n        followingCount\n      }\n      followedCollections\n      username\n    }\n  }\n"]);return m=function(){return e},e}var d=function(e){var n,t,l=null!==(n="Collection"===e.__typename?0:(null===(t=e.socialStats)||void 0===t?void 0:t.followingCount)+e.followedCollections)&&void 0!==n?n:0;return{followingCount:l,isFollowingCountVisible:l>0}},p=function(e){var n,t=e.publisher,l=e.linkStyle,r=void 0===l?"SUBTLE":l,o=d(t),m=o.followingCount,p=o.isFollowingCountVisible,f="User"===t.__typename?(0,c.MzF)(null!==(n=t.username)&&void 0!==n?n:""):"",g=!!f;if(!p)return null;var v="".concat((0,s.pY)(m)," Following");return g?i.createElement(a.rU,{linkStyle:r,href:f},v):i.createElement(u.F,{tag:"span",scale:"L",color:"DARKER"},v)},f=(0,o.Ps)(m())},78886:(e,n,t)=>{"use strict";t.d(n,{KL:()=>A,mK:()=>G,Lk:()=>N,eB:()=>V,qy:()=>z,FB:()=>q});var l=t(28655),r=t.n(l),o=t(59713),i=t.n(o),a=t(63038),u=t.n(a),s=t(46829),c=t(71439),m=t(67294),d=t(54415),p=t(97297),f=t(44935),g=t(53976),v=t(34675),b=t(68421),E=t(41832),h=t(22091),y=t(64504),S=t(67995),w=t(62630),_=t(27572),I=t(28309),B=t(19551),C=t(14391),O=t(67297),x=t(27390),L=t(27952);function F(){var e=r()(["\n  query PublisherSidebarFollowsQuery($userId: ID!, $limit: Int) {\n    userFollows(userId: $userId, limit: $limit) {\n      ... on User {\n        hasDomain\n        ...UserMentionTooltip_user\n        ...PublisherSidebarFollows_followedEntity\n      }\n      ... on Collection {\n        ...CollectionTooltip_collection\n        ...PublisherSidebarFollows_followedEntity\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"]);return F=function(){return e},e}function P(){var e=r()(["\n  fragment PublisherSidebarFollows_followedEntity on Publisher {\n    __typename\n    id\n    name\n    ...PublisherAvatar_publisher\n  }\n  ","\n"]);return P=function(){return e},e}function U(){var e=r()(["\n  fragment PublisherSidebarFollows_user on User {\n    id\n    name\n    username\n    ...PublisherFollowingCount_publisher\n    ...userUrl_user\n  }\n  ","\n  ","\n"]);return U=function(){return e},e}function k(){var e=r()(["\n  fragment PublisherSidebarFollows_customStyleSheet on CustomStyleSheet {\n    id\n    blogroll {\n      visibility\n    }\n  }\n"]);return k=function(){return e},e}function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D,A=function(e){var n,t=(0,g.V)({name:"enable_blogrolls",placeholder:!1}),l=(null==e||null===(n=e.blogroll)||void 0===n?void 0:n.visibility)===C.n$.BLOGROLL_VISIBILITY_SIDEBAR;return{isBlogrollInSidebar:t&&l}},G=function(e,n){var t,l=(0,v.Hk)().value,r="User"===e.__typename&&e.id===(null==l?void 0:l.id),o=(null==n||null===(t=n.blogroll)||void 0===t?void 0:t.visibility)===C.n$.BLOGROLL_VISIBILITY_SIDEBAR,i=!(null==l||!l.dismissableFlags.includes(C.T3.BLOGROLL_ENABLE));return{useGhostBlogroll:r&&!i&&!o}},N=m.createContext({homepageUserId:null,postId:null});!function(e){e[e.Initial=0]="Initial",e[e.Secondary=1]="Secondary",e[e.Dismissed=2]="Dismissed",e[e.Navigating=3]="Navigating"}(D||(D={}));var j=function(e){return{backgroundColor:e.backgroundColor,position:"absolute",height:"100%",width:"100%",opacity:".65"}},V=function(e){var n,t,l=e.publisher,r=e.isVisible,o=e.customStyleSheet,i=e.withBottomBorder,a=void 0!==i&&i,c=(0,I.Iq)(),g=(0,v.Hk)().value,F=(0,O.v9)((function(e){return e.config.authDomain})),P=(0,O.p9)((function(e){return e.config.isAmp})),U=(0,O.v9)((function(e){return e.navigation.currentLocation})),k=(0,L.MzF)(null!==(n=l.username)&&void 0!==n?n:""),T=m.useState(D.Initial),A=u()(T,2),V=A[0],z=A[1],q=(0,S.n)({name:"detail",scale:"S",clamp:1,leadingTrim:!1,color:"LIGHTER"}),M=c([q,{wordBreak:"break-all"}]),W="User"===l.__typename&&l.id===(null==g?void 0:g.id),H=(null==o||null===(t=o.blogroll)||void 0===t?void 0:t.visibility)===C.n$.BLOGROLL_VISIBILITY_SIDEBAR,X=G(l,o).useGhostBlogroll,Y=(0,w.Av)(),Z=m.useContext(N),K=(0,B.g)({onPresentedFn:function(){return Y.event("sidebar.blogrollViewed",R(R({},Z),{},{viewerIsAuthor:W,showingGhost:X}))}}),Q=(0,s.useLazyQuery)($,{ssr:!1,variables:{userId:l.id,limit:5}}),J=u()(Q,2),ee=J[0],ne=J[1],te=ne.called,le=ne.loading,re=ne.error,oe=ne.data,ie=(oe=void 0===oe?{userFollows:void 0}:oe).userFollows,ae=(0,p.gp)(l).followingCount,ue=m.useCallback((function(e){return function(){var n=V===D.Initial?"Blogrolls help your readers discover writers you follow. Writers who have published most recently show up at the top.":"You can always turn on blogroll in your design editor. Until then, readers can get to your Following from the About page.",t=function(n){z(n),e()};return m.createElement(h.xu,{minWidth:"240px",padding:"20px"},m.createElement(y.F,{scale:"S"},n),m.createElement(h.xu,{marginTop:"20px"},m.createElement(y.F,{scale:"S"},V?m.createElement(h.rU,{linkStyle:"OBVIOUS",onClick:function(){return t(D.Dismissed)}},"Got it"):m.createElement(m.Fragment,null,m.createElement(h.rU,{linkStyle:"OBVIOUS",href:(0,L.aLX)(F,{unfold:"Blogroll",action:"enableBlogroll"}),onClick:function(){return t(D.Navigating)}},"Turn on"),m.createElement("span",{className:c({marginLeft:"8px"})},m.createElement(h.rU,{linkStyle:"SUBTLE",onClick:function(){return z(D.Secondary)}},"Not now"))))))}}),[z]);return P||!X&&!H||V===D.Dismissed?null:te?le||re||!ie||!ie.length?null:m.createElement(_.cW,{source:{name:"blogrolls_sidebar",postId:Z.postId||void 0}},m.createElement(h.xu,{ref:K,position:"relative",borderTop:"BASE_LIGHTER",borderBottom:a?"NONE":void 0},X?m.createElement("div",{className:c([j])}):null,m.createElement(h.xu,{marginTop:"32px",marginBottom:"32px"},m.createElement(b.o,{flag:C.T3.BLOGROLL_ENABLE,isVisible:r&&X,targetDistance:15,renderFn:ue},m.createElement("span",{className:c({textTransform:"uppercase",marginBottom:"8px"})},m.createElement(y.F,{scale:"S",tag:"span"},"".concat(l.name," Follows"))),m.createElement("ul",{className:c({marginTop:"8px"})},ie.map((function(e){var n="User"===e.__typename?(0,L.AWr)(e,F):(0,L.WGd)(e,U,F);return m.createElement("li",{className:c({display:"grid",gridTemplateColumns:"auto 1fr auto"}),key:null==e?void 0:e.id},m.createElement(h.xu,{paddingRight:"12px"},m.createElement(d.G,{link:!0,publisher:e,scale:"XXXS"})),m.createElement("section",{className:c({wordBreak:"break-word"})},m.createElement(h.xu,{marginBottom:"8px",paddingRight:"10px",tag:"span"},m.createElement(h.rU,{href:n},m.createElement(h.$W,{placement:"right",targetDistance:15,mouseEnterDelay:500,mouseLeaveDelay:0,noPortal:!1,disablePortalOverlay:!0,role:"tooltip",popoverRenderFn:function(){return"User"===e.__typename?m.createElement(E.ZP,{user:e}):m.createElement(f.L,{collection:e,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}},m.createElement("h4",{className:M},e.name))))))}))),ae>=5?m.createElement(y.F,{scale:"S"},m.createElement(h.rU,{linkStyle:"SUBTLE",href:k},"See all (".concat((0,x.rR)(ae),")"))):null)))):(ee(),null)},z=(0,c.Ps)(k()),q=(0,c.Ps)(U(),p.b5,L.$mN),M=(0,c.Ps)(P(),d.v),$=(0,c.Ps)(F(),E.OJ,f.g,M)},44935:(e,n,t)=>{"use strict";t.d(n,{L:()=>d,g:()=>p});var l=t(28655),r=t.n(l),o=t(71439),i=t(67294),a=t(73882),u=t(84783),s=t(7530),c=t(64504);function m(){var e=r()(["\n  fragment CollectionTooltip_collection on Collection {\n    id\n    name\n    description\n    subscriberCount\n    ...CollectionAvatar_collection\n    ...CollectionFollowButton_collection\n  }\n  ","\n  ","\n"]);return m=function(){return e},e}var d=function(e){var n=e.collection,t=e.buttonSize,l=e.buttonStyleFn,r=n.name,o=n.description;return i.createElement(s.xu,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},i.createElement(s.xu,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},i.createElement(s.xu,{display:"flex",flexDirection:"column",paddingRight:"5px"},i.createElement(c.X6,{scale:"S"},r),i.createElement(c.F,{scale:"S"},o)),i.createElement(s.xu,null,i.createElement(a.v,{collection:n,link:!0}))),i.createElement(s.xu,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},i.createElement(c.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),i.createElement(u.Fp,{collection:n,simpleButton:!0,buttonSize:t,buttonStyleFn:l,susiEntry:"follow_card"})))},p=(0,o.Ps)(m(),a.d,u.Iq)},78221:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c,U:()=>m});var l=t(28655),r=t.n(l),o=t(71439),i=t(67294),a=t(8558),u=t(90038);function s(){var e=r()(["\n  fragment SequenceCoverImage_sequence on Sequence {\n    title\n    coverImage {\n      id\n    }\n  }\n"]);return s=function(){return e},e}function c(e){var n=e.sequence,t=e.width,l=e.height,r=n.title,o=n.coverImage;return o?i.createElement("div",null,i.createElement(a.UV,{miroId:o.id,alt:r||"Collection on Medium",width:t,height:l,strategy:u._S.Resample,freezeGifs:!1})):null}var m=(0,o.Ps)(s())},93258:(e,n,t)=>{"use strict";t.d(n,{d:()=>p});var l=t(63038),r=t.n(l),o=t(67294),i=t(885),a=t(34675),u=t(324),s=t(7530),c=t(28309),m=t(51064),d=t(534),p=function(e){var n=e.buttonSize,t=e.targetUserId,l=(0,m.O)(!1),p=r()(l,3),f=p[0],g=p[1],v=p[2],b=(0,c.Fg)(),E=(0,u.Uo)().baseTheme,h=(0,d.q3)(b,E),y=(0,a.Hk)().value;return y?o.createElement(c.f6,{theme:h},o.createElement(i.Z,{targetUserId:t,viewerId:y&&y.id},(function(e){var t=e.mutate;return o.createElement(s.zx,{buttonStyle:f?"SUBTLE":"ERROR",onClick:t,size:n||"REGULAR",onMouseEnter:g,onMouseLeave:v},f?"Unblock":"Blocked")}))):null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8995.d55b9701.chunk.js.map