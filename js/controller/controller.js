var homeApp = angular.module('homeApp', []);
homeApp.controller('homeController',function ($scope) {
  $scope.contents = [
    {
      img: 'gambar/chili.jpg',
      name: '[EKONOMI] Cabai Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/garlic.jpg',
      name: '[EKONOMI] Bawang Putih Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/green-chili.jpg',
      name: '[EKONOMI] Cabai Hijau Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/onion-01.jpg',
      name: '[EKONOMI] Bawang Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/potato.jpeg',
      name: '[EKONOMI] Kentang Jogja Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/tomato.jpg',
      name: '[EKONOMI] Tomat Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/zagung.jpg',
      name: '[EKONOMI] Jagung Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/chili.jpg',
      name: '[EKONOMI] Cabai Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    }
  ];
});

homeApp.directive("panenDirective", function() {
    return {
        restrict : "A",
        templateUrl : "js/directives/komoditasPanen.html"
    };
});

homeApp.controller('belanjaController',function ($scope) {
  $scope.show = 8;
  $scope.tampil = true;
  $scope.contents = [
    {
      img: 'gambar/chili.jpg',
      name: '[EKONOMI] Cabai Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/garlic.jpg',
      name: '[EKONOMI] Bawang Putih Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/green-chili.jpg',
      name: '[EKONOMI] Cabai Hijau Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/onion-01.jpg',
      name: '[EKONOMI] Bawang Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/potato.jpeg',
      name: '[EKONOMI] Kentang Jogja Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/tomato.jpg',
      name: '[EKONOMI] Tomat Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/zagung.jpg',
      name: '[EKONOMI] Jagung Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/chili.jpg',
      name: '[EKONOMI] Cabai Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/chili.jpg',
      name: '[EKONOMI] Cabai Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/garlic.jpg',
      name: '[EKONOMI] Bawang Putih Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/green-chili.jpg',
      name: '[EKONOMI] Cabai Hijau Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/onion-01.jpg',
      name: '[EKONOMI] Bawang Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/potato.jpeg',
      name: '[EKONOMI] Kentang Jogja Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/tomato.jpg',
      name: '[EKONOMI] Tomat Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/zagung.jpg',
      name: '[EKONOMI] Jagung Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/onion-01.jpg',
      name: '[EKONOMI] Bawang Merah Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    },
    {
      img: 'gambar/potato.jpeg',
      name: '[EKONOMI] Kentang Jogja Segar Kentang Jogja Segar [5kg]',
      p_img: 'gambar/Limakilo_10.jpg',
      p_name: 'farmer Limakilo'
    }
  ];

  $scope.moreShow = function ($element) {
    var x = document.getElementsByClassName('button-more-1');
    if ($scope.show <= $scope.contents.length) {
      $scope.show = $scope.show + 8;
      $scope.tampil = true;
    };

    if ($scope.show > $scope.contents.length) {
      $scope.tampil = false;
    };
  };

});

homeApp.directive("belanjaDirective", function() {
    return {
        restrict : "A",
        templateUrl : "js/directives/belanjaKomoditas.html"
    };
});
