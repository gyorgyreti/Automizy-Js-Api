define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Campaigns = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.campaigns
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Campaigns.prototype;

    p.getOpenStatById = function (id, from, to) {
        var t = this;
        var data = {
            format:'total'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickStatById = function (id, from, to) {
        var t = this;
        var data = {
            format:'total'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getShareStatById = function (id, from, to) {
        var t = this;
        var data = {
            format:'total'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/shares' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getUnsubscribeStatById = function (id, from, to) {
        var t = this;
        var data = {
            format:'total'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/unsubscribes' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getBounceStatById = function (id, from, to) {
        var t = this;
        var data = {
            format:'total'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/bounces' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getGeoStatById = function (id, from, to) {
        var t = this;
        var data = {
            format:'raw'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/geo-locations' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        if(typeof step !== 'undefined' && step !== false){
            data.step = step;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        if(typeof step !== 'undefined' && step !== false){
            data.step = step;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenDevicePieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'device'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickDevicePieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'device'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenDeviceTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'device'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickDeviceTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'device'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenOsPieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'os'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickOsPieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'os'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenOsTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'os'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickOsTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'os'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenBrowserPieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'browser'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickBrowserPieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'browser'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenBrowserTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'browser'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickBrowserTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'browser'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenDomainPieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'domain'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickDomainPieById = function (id, from, to) {
        var t = this;
        var data = {
            format:'aggregate',
            groupBy:'domain'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getOpenDomainTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'domain'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/opens' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getClickDomainTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline',
            groupBy:'domain'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/clicks' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getHeatMapById = function (id, from, to) {
        var t = this;
        var data = {
            format:'raw'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.d.url + '/' + id + '/heat-map' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(Campaigns, "Campaigns");
    p.send = p.insert;

});