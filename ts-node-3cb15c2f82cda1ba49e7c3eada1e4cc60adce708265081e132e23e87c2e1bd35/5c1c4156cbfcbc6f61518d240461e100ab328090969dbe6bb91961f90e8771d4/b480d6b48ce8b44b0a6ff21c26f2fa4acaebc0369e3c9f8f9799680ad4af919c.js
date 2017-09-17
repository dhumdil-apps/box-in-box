"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app.server.module.ngfactory");
var express = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var PORT = 4000;
core_1.enableProdMode();
var app = express();
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
app.listen(PORT, function () {
    console.log("listening on http://localhost:" + PORT + "!");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9zZXJ2ZXIudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLGtDQUFnQztBQUNoQyw0REFBK0Q7QUFDL0Qsc0NBQStDO0FBQy9DLHFHQUFpRztBQUNqRyxpQ0FBbUM7QUFDbkMseUJBQWtDO0FBQ2xDLDZCQUE0QjtBQUU1QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIscUJBQWMsRUFBRSxDQUFDO0FBRWpCLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLElBQU0sUUFBUSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFdEYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVE7SUFDdkMsSUFBTSxJQUFJLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTFELHFDQUFtQixDQUFDLHNEQUF3QixFQUFFLElBQUksQ0FBQztTQUNqRCxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUV2QixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5RCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3JCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBaUMsSUFBSSxNQUFHLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLW5vZGUnO1xuaW1wb3J0IHsgcmVuZGVyTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwU2VydmVyTW9kdWxlTmdGYWN0b3J5IH0gZnJvbSAnLi4vZGlzdC9uZ2ZhY3Rvcnkvc3JjL2FwcC9hcHAuc2VydmVyLm1vZHVsZS5uZ2ZhY3RvcnknO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuY29uc3QgUE9SVCA9IDQwMDA7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuY29uc3QgdGVtcGxhdGUgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLicsICdkaXN0JywgJ2luZGV4Lmh0bWwnKSkudG9TdHJpbmcoKTtcblxuYXBwLmVuZ2luZSgnaHRtbCcsIChfLCBvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuXHRjb25zdCBvcHRzID0geyBkb2N1bWVudDogdGVtcGxhdGUsIHVybDogb3B0aW9ucy5yZXEudXJsIH07XG5cblx0cmVuZGVyTW9kdWxlRmFjdG9yeShBcHBTZXJ2ZXJNb2R1bGVOZ0ZhY3RvcnksIG9wdHMpXG5cdFx0LnRoZW4oaHRtbCA9PiBjYWxsYmFjayhudWxsLCBodG1sKSk7XG59KTtcblxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuYXBwLnNldCgndmlld3MnLCAnc3JjJylcblxuYXBwLmdldCgnKi4qJywgZXhwcmVzcy5zdGF0aWMoam9pbihfX2Rpcm5hbWUsICcuLicsICdkaXN0JykpKTtcblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuXHRyZXMucmVuZGVyKCdpbmRleCcsIHsgcmVxIH0pO1xufSk7XG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfSFgKTtcbn0pO1xuIl19