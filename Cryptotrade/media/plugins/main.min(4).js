!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):(e=e||self,t(e.FullCalendarList={},e.FullCalendar))}(this,function(e,t){"use strict";function n(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function r(e){for(var n=t.startOfDay(e.renderRange.start),r=e.renderRange.end,s=[],a=[];n<r;)s.push(n),a.push({start:n,end:t.addDays(n,1)}),n=t.addDays(n,1);return{dayDates:s,dayRanges:a}}/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
var s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},a=function(e){function r(t){var n=e.call(this,t.context)||this;return n.listView=t,n}return n(r,e),r.prototype.attachSegs=function(e){e.length?this.listView.renderSegList(e):this.listView.renderEmptyMessage()},r.prototype.detachSegs=function(){},r.prototype.renderSegHtml=function(e){var n,r=this.context,s=r.view,a=r.theme,i=e.eventRange,o=i.def,l=i.instance,d=i.ui,c=o.url,p=["fc-list-item"].concat(d.classNames),h=d.backgroundColor;return n=o.allDay?t.getAllDayHtml(s):t.isMultiDayRange(i.range)?e.isStart?t.htmlEscape(this._getTimeText(l.range.start,e.end,!1)):e.isEnd?t.htmlEscape(this._getTimeText(e.start,l.range.end,!1)):t.getAllDayHtml(s):t.htmlEscape(this.getTimeText(i)),c&&p.push("fc-has-url"),'<tr class="'+p.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+a.getClass("widgetContent")+'">'+(n||"")+"</td>":"")+'<td class="fc-list-item-marker '+a.getClass("widgetContent")+'"><span class="fc-event-dot"'+(h?' style="background-color:'+h+'"':"")+'></span></td><td class="fc-list-item-title '+a.getClass("widgetContent")+'"><a'+(c?' href="'+t.htmlEscape(c)+'"':"")+">"+t.htmlEscape(o.title||"")+"</a></td></tr>"},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:"short"}},r}(t.FgEventRenderer),i=function(e){function s(n,s,i,o){var l=e.call(this,n,s,i,o)||this;l.computeDateVars=t.memoize(r),l.eventStoreToSegs=t.memoize(l._eventStoreToSegs);var d=l.eventRenderer=new a(l);l.renderContent=t.memoizeRendering(d.renderSegs.bind(d),d.unrender.bind(d)),l.el.classList.add("fc-list-view");for(var c=(l.theme.getClass("listView")||"").split(" "),p=0,h=c;p<h.length;p++){var u=h[p];u&&l.el.classList.add(u)}return l.scroller=new t.ScrollComponent("hidden","auto"),l.el.appendChild(l.scroller.el),l.contentEl=l.scroller.el,n.calendar.registerInteractiveComponent(l,{el:l.el}),l}return n(s,e),s.prototype.render=function(e){var t=this.computeDateVars(e.dateProfile),n=t.dayDates,r=t.dayRanges;this.dayDates=n,this.renderContent(this.eventStoreToSegs(e.eventStore,e.eventUiBases,r))},s.prototype.destroy=function(){e.prototype.destroy.call(this),this.scroller.destroy(),this.calendar.unregisterInteractiveComponent(this)},s.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.eventRenderer.computeSizes(t),this.eventRenderer.assignSizes(t),this.scroller.clear(),r||this.scroller.setHeight(this.computeScrollerHeight(n))},s.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},s.prototype._eventStoreToSegs=function(e,n,r){return this.eventRangesToSegs(t.sliceEventStore(e,n,this.props.dateProfile.activeRange,this.nextDayThreshold).fg,r)},s.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,s=e;r<s.length;r++){var a=s[r];n.push.apply(n,this.eventRangeToSegs(a,t))}return n},s.prototype.eventRangeToSegs=function(e,n){var r,s,a,i=this,o=i.dateEnv,l=i.nextDayThreshold,d=e.range,c=e.def.allDay,p=[];for(r=0;r<n.length;r++)if((s=t.intersectRanges(d,n[r]))&&(a={component:this,eventRange:e,start:s.start,end:s.end,isStart:e.isStart&&s.start.valueOf()===d.start.valueOf(),isEnd:e.isEnd&&s.end.valueOf()===d.end.valueOf(),dayIndex:r},p.push(a),!a.isEnd&&!c&&r+1<n.length&&d.end<o.add(n[r+1].start,l))){a.end=d.end,a.isEnd=!0;break}return p},s.prototype.renderEmptyMessage=function(){this.contentEl.innerHTML='<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+t.htmlEscape(this.opt("noEventsMessage"))+"</div></div></div>"},s.prototype.renderSegList=function(e){var n,r,s,a=this.groupSegsByDay(e),i=t.htmlToElement('<table class="fc-list-table '+this.calendar.theme.getClass("tableList")+'"><tbody></tbody></table>'),o=i.querySelector("tbody");for(n=0;n<a.length;n++)if(r=a[n])for(o.appendChild(this.buildDayHeaderRow(this.dayDates[n])),r=this.eventRenderer.sortEventSegs(r),s=0;s<r.length;s++)o.appendChild(r[s].el);this.contentEl.innerHTML="",this.contentEl.appendChild(i)},s.prototype.groupSegsByDay=function(e){var t,n,r=[];for(t=0;t<e.length;t++)n=e[t],(r[n.dayIndex]||(r[n.dayIndex]=[])).push(n);return r},s.prototype.buildDayHeaderRow=function(e){var n=this.dateEnv,r=t.createFormatter(this.opt("listDayFormat")),s=t.createFormatter(this.opt("listDayAltFormat"));return t.createElement("tr",{className:"fc-list-heading","data-date":n.formatIso(e,{omitTime:!0})},'<td class="'+(this.calendar.theme.getClass("tableListHeading")||this.calendar.theme.getClass("widgetHeader"))+'" colspan="3">'+(r?t.buildGotoAnchorHtml(this,e,{class:"fc-list-heading-main"},t.htmlEscape(n.format(e,r))):"")+(s?t.buildGotoAnchorHtml(this,e,{class:"fc-list-heading-alt"},t.htmlEscape(n.format(e,s))):"")+"</td>")},s}(t.View);i.prototype.fgSegSelector=".fc-list-item";var o=t.createPlugin({views:{list:{class:i,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDayAltFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDayAltFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDayAltFormat:{weekday:"long"}}}});e.ListView=i,e.default=o,Object.defineProperty(e,"__esModule",{value:!0})});