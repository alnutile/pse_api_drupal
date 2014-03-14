<div ng-app="pseApi">
  <div ng-controller="BannersController">
      <div style="height: 221px">
          <carousel interval="interval">
              <slide ng-repeat="slide in slides" active="slide.active">
                  <img ng-src="{{slide.image}}" style="margin:auto;">
              </slide>
          </carousel>
      </div>
  </div>
  <div class="ng-content" ng-view>

  </div>
</div>