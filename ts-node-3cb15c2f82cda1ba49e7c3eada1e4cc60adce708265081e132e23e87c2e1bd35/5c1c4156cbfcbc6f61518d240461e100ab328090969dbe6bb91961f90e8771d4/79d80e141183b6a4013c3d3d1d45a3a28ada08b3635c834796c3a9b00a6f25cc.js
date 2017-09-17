"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slides = (function () {
    function Slides(data) {
        var _this = this;
        this.slides = [];
        try {
            data.forEach(function (slide) {
                _this.slides.push({
                    'src': slide['src'],
                    'url': slide['url']
                });
            });
        }
        catch (e) {
            this.slides = [];
        }
    }
    return Slides;
}());
exports.Slides = Slides;
/*
slider.json
{
    "data": [
        {
            "src": "assets/admin/img/slider/img0.png",
            "url": "google.com"
        },
        {
            "src": "assets/admin/img/slider/img1.jpg",
            "url": "www.facebook.com"
        }
    ]
}
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVzLm1vZGVsLnRzIiwic291cmNlcyI6WyIvaG9tZS9tYXJ0aW4tcGV0ZXIvY29kZS9ibmIvc3JjL2FwcC9tYWluL3NsaWRlci9zbGlkZXMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUlDLGdCQUFZLElBQVM7UUFBckIsaUJBZUM7UUFqQk0sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUlsQixJQUNBLENBQUM7WUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDbkIsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ1QsQ0FBQztZQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDRixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksd0JBQU07QUFzQm5COzs7Ozs7Ozs7Ozs7OztFQWNFIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgU2xpZGVzIHtcblxuXHRwdWJsaWMgc2xpZGVzID0gW107XG5cblx0Y29uc3RydWN0b3IoZGF0YTogYW55KVxuXHR7XG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0ZGF0YS5mb3JFYWNoKChzbGlkZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNsaWRlcy5wdXNoKHtcblx0XHRcdFx0XHQnc3JjJzogc2xpZGVbJ3NyYyddLFxuXHRcdFx0XHRcdCd1cmwnOiBzbGlkZVsndXJsJ11cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5zbGlkZXMgPSBbXTtcblx0XHR9XG5cdH1cbn1cblxuLypcbnNsaWRlci5qc29uXG57XG4gICAgXCJkYXRhXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvYWRtaW4vaW1nL3NsaWRlci9pbWcwLnBuZ1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJnb29nbGUuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvYWRtaW4vaW1nL3NsaWRlci9pbWcxLmpwZ1wiLFxuICAgICAgICAgICAgXCJ1cmxcIjogXCJ3d3cuZmFjZWJvb2suY29tXCJcbiAgICAgICAgfVxuICAgIF1cbn1cbiovXG4iXX0=