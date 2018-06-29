webpackJsonp([35783957827783],{102:function(e,t,l){!function(t,l){e.exports=l()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,a=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,i=o&&o(Object);return function u(c,s,m){if("string"!=typeof s){if(i){var d=o(s);d&&d!==i&&u(c,d,m)}var f=a(s);n&&(f=f.concat(n(s)));for(var h=0;h<f.length;++h){var p=f[h];if(!(e[p]||t[p]||m&&m[p])){var y=r(s,p);try{l(c,p,y)}catch(e){}}}return c}return c}})},199:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(2),r=a(n),o=l(34),i=(a(o),function(e){var t=e.code;return r.default.createElement("p",{className:"code"},t)});t.default=i,e.exports=t.default},203:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(2),r=a(n),o=l(34),i=a(o),u=l(199),c=a(u),s=function(){return r.default.createElement("div",null,r.default.createElement("h1",null,"Hello Developers!  ",r.default.createElement("i",{className:"em em-wave"})),r.default.createElement("h3",null,"Let's help you submit your first Pull Request."),r.default.createElement("p",null,"Once your pull request is being merged, your profile will be visible in the ",r.default.createElement(i.default,{to:"/submissions/"},"Submissions "),"section of this page. For this exercise you'll be adding a new entry to the source code of this website with your profile details. Excited? ",r.default.createElement("i",{className:"em em-grinning_face_with_star_eyes"})," let's begin!"),r.default.createElement("h3",null,"Step 1"),r.default.createElement("p",null,"Goto the ",r.default.createElement("a",{target:"_blank",href:"https://github.com/haxzie/GitMe"}," GitHub repository ")," of this project and fork the project to your account. ",r.default.createElement("i",{className:"em em-knife_fork_plate"}),"Click on the fork button on the top right corner of the repository page to do it. Once done, GitHub will take you to the forked copy in your account.",r.default.createElement(c.default,{code:"https://github.com/haxzie/GitMe"})),r.default.createElement("h3",null,"Step 2"),r.default.createElement("p",null,'Clone the forked repository to your local machine. Click on the big green button saying "Clone or download" and copy the https url of your repository. Fire up the terminal (on linux systems ctrl+alt+t. on Windows open the ',r.default.createElement("a",{target:"_blank",href:"https://git-scm.com/download/win"},"Git-bash")," ) navigate to your desired directory and type the following command. Replace the link with the clone URL of your repository and hit Enter.",r.default.createElement(c.default,{code:"git clone https://github.com/YOUR_USERNAME/GitMe.git"})),r.default.createElement("h3",null,"Step 3"),r.default.createElement("p",null,"Let's start working on the changes required now! Before jumping in to the code, make sure you're working on a different branch and not in master. To create a new branch, from the terminal inside your current project directory type the following command.",r.default.createElement(c.default,{code:"git branch YOUR_USERNAME-profile"}),"Replace the ",r.default.createElement("i",null,"YOUR_USERNAME")," with your GitHub username or you can give any name to your branch which describes the purpose of the branch. Since here we're adding your profile, we'll simply give the name of the branch as above. eg: ",r.default.createElement("i",null,"git branch haxzie-profile"),". Once you have created the new branch we'll change the current brach from master to your newly created branch. Execute the following command on your terminal.",r.default.createElement(c.default,{code:"git checkout YOUR_BRANCH_NAME"})),r.default.createElement("h3",null,"Step 4"),r.default.createElement("p",null,"In your ",r.default.createElement("i",{className:"em em-card_file_box"})," file manager/terminal navigate to the downloaded repo. Open the sub-directory ",r.default.createElement("i",{className:"em em-file_folder"}),r.default.createElement("b",null,"src/profile/"),". and create a new ",r.default.createElement("b",null,".md")," file with your username as the filename with ",r.default.createElement("b",null,".md")," extension.",r.default.createElement("br",null),"It should look like ",r.default.createElement("b",null,"YOUR_USER_NAME.md")," ",r.default.createElement("i",null,"eg: haxzie.md "),r.default.createElement("br",null),"Open this file in your favourite editor and fill the details as below in the frontmatter of the markdown file.",r.default.createElement("br",null),r.default.createElement("i",{className:"em em-page_facing_up"}),r.default.createElement("i",null,"YOUR_USER_NAME.md"),r.default.createElement("p",{className:"code"},"---",r.default.createElement("br",null),"username: YOUR_USER_NAME",r.default.createElement("br",null),"fullname: YOUR_FULL_NAME",r.default.createElement("br",null),"---"),r.default.createElement("p",null,'Donot forget that the hyphens "---" are also part of the file. Once you finish adding the content, save the file.')),r.default.createElement("h3",null,"Step 5"),r.default.createElement("p",null,"Commit the changes with a suitable commit message.",r.default.createElement("i",{className:"em em-white_check_mark"})," First we need to stage all the changes we made. Open the terminal inside the project directory and execute following commands.",r.default.createElement(c.default,{code:"git add -A"}),"The above command stages all the changes, now lets commit it with a suitable message.",r.default.createElement(c.default,{code:'git commit -m "YOUR_COMMIT_MEESSAGE"'})),r.default.createElement("h3",null,"Step 6"),r.default.createElement("p",null,"Let's push the changes to your repository!",r.default.createElement("i",{className:"em em-arrow_up"})," execute the following command to push all the changes to the forked copy in your GitHub account.",r.default.createElement(c.default,{code:"git push -u origin YOUR_BRANCH_NAME"})),r.default.createElement("h3",null,"Step 7"),r.default.createElement("p",null,"Now, open your web browser and goto the ",r.default.createElement("a",{target:"_blank",href:"https://github.com/haxzie/GitMe"}," original repository on GitHub"),'. If your changes has been pushed to your forked copy, You\'ll be able to see an option saying "New Pull Request" in the original repository. Click on the option, one next page choose the master branch of the main repo against your created-branch name ( choose your branch name we created and not master). the click on create pull request. Once you fill in the commit message and comment click on submit pull request. ',r.default.createElement("br",null),"and you are all done! ",r.default.createElement("i",{className:"em em-confetti_ball"})," Wait for a reviewer to review your file and merge it to the master. Once its been successfully merged, your profile will be visible in the submissions tab. ",r.default.createElement("i",{className:"em em-trophy"})))};t.default=s,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-d850c22da32a236f6054.js.map