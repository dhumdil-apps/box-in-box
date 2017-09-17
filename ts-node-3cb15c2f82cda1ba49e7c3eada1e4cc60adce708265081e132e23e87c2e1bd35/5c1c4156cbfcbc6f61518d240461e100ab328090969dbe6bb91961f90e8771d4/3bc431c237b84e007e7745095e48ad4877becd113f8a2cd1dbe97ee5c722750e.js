"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dropdown = (function () {
    function Dropdown(list) {
        this.setList(list);
        this.title = 'Select Item';
        this.selected = -1;
        this.isVisible = false;
        this.centerTitle = false;
        this.centerListItems = false;
        this.titleAsSelectedItem = false;
        this.icon = '';
    }
    Dropdown.prototype.setCenterTitle = function () {
        this.centerTitle = true;
    };
    Dropdown.prototype.setCenterListItems = function () {
        this.centerListItems = true;
    };
    Dropdown.prototype.setTitleImage = function (icon) {
        this.icon = icon;
    };
    Dropdown.prototype.setTitleToSelectedItem = function () {
        this.titleAsSelectedItem = true;
    };
    Dropdown.prototype.setList = function (list) {
        try {
            this.list = list;
        }
        catch (e) {
            this.list = [];
        }
    };
    Dropdown.prototype.setTitle = function (title) {
        try {
            this.title = title;
        }
        catch (e) {
            this.title = '';
        }
    };
    Dropdown.prototype.select = function (index) {
        try {
            this.selected = index;
            if (this.titleAsSelectedItem) {
                this.setTitle(this.list[index]);
            }
        }
        catch (e) {
            this.selected = -1;
        }
    };
    Dropdown.prototype.hide = function () {
        this.isVisible = false;
    };
    Dropdown.prototype.toggle = function () {
        this.isVisible = !this.isVisible;
    };
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5tb2RlbC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBV0Msa0JBQVksSUFBUztRQUVwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQWMsR0FBckI7UUFFQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0scUNBQWtCLEdBQXpCO1FBRUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFFaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVNLHlDQUFzQixHQUE3QjtRQUVDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVNLDBCQUFPLEdBQWQsVUFBZSxJQUFTO1FBRXZCLElBQ0EsQ0FBQztZQUNBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDVCxDQUFDO1lBQ0EsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNGLENBQUM7SUFFTSwyQkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDNUIsSUFDQSxDQUFDO1lBQ0EsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7WUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0YsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQzFCLElBQ0EsQ0FBQztZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUM3QixDQUFDO2dCQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDRixDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ1QsQ0FBQztZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7SUFFTSx1QkFBSSxHQUFYO1FBRUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLHlCQUFNLEdBQWI7UUFFQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUYsZUFBQztBQUFELENBQUMsQUEzRkQsSUEyRkM7QUEzRlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHJvcGRvd24ge1xuXG5cdHB1YmxpYyBsaXN0OiBhbnk7XG5cdHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXHRwdWJsaWMgc2VsZWN0ZWQ6IG51bWJlcjtcblx0cHVibGljIGlzVmlzaWJsZTogYm9vbGVhbjtcblx0cHVibGljIGNlbnRlclRpdGxlOiBib29sZWFuO1xuXHRwdWJsaWMgY2VudGVyTGlzdEl0ZW1zOiBib29sZWFuO1xuXHRwdWJsaWMgdGl0bGVBc1NlbGVjdGVkSXRlbTogYm9vbGVhbjtcblx0cHVibGljIGljb246IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihsaXN0OiBhbnkpXG5cdHtcblx0XHR0aGlzLnNldExpc3QobGlzdCk7XG5cdFx0dGhpcy50aXRsZSA9ICdTZWxlY3QgSXRlbSc7XG5cdFx0dGhpcy5zZWxlY3RlZCA9IC0xO1xuXHRcdHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jZW50ZXJUaXRsZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2VudGVyTGlzdEl0ZW1zID0gZmFsc2U7XG5cdFx0dGhpcy50aXRsZUFzU2VsZWN0ZWRJdGVtID0gZmFsc2U7XG5cdFx0dGhpcy5pY29uID0gJyc7XG5cdH1cblxuXHRwdWJsaWMgc2V0Q2VudGVyVGl0bGUoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5jZW50ZXJUaXRsZSA9IHRydWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0Q2VudGVyTGlzdEl0ZW1zKCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuY2VudGVyTGlzdEl0ZW1zID0gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXRUaXRsZUltYWdlKGljb246IHN0cmluZyk6IHZvaWRcblx0e1xuXHRcdHRoaXMuaWNvbiA9IGljb247XG5cdH1cblxuXHRwdWJsaWMgc2V0VGl0bGVUb1NlbGVjdGVkSXRlbSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLnRpdGxlQXNTZWxlY3RlZEl0ZW0gPSB0cnVlO1xuXHR9XG5cblx0cHVibGljIHNldExpc3QobGlzdDogYW55KTogdm9pZFxuXHR7XG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0dGhpcy5saXN0ID0gbGlzdDtcblx0XHR9XG5cdFx0Y2F0Y2ggKGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5saXN0ID0gW107XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0fVxuXHRcdGNhdGNoIChlKVxuXHRcdHtcblx0XHRcdHRoaXMudGl0bGUgPSAnJztcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gaW5kZXg7XG5cdFx0XHRpZiAodGhpcy50aXRsZUFzU2VsZWN0ZWRJdGVtKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnNldFRpdGxlKHRoaXMubGlzdFtpbmRleF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAoZSlcblx0XHR7XG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gLTE7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGhpZGUoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XG5cdH1cblxufVxuIl19