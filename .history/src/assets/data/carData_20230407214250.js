// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    brand: "Nissan",
    id: 1,
    rating: 112,
    carName: "Nissan Navara EL",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "120km/h",
    gps: "Tích hợp GoogleMap",
    seatType: "Có sấy ghế",
    automatic: "Tự Động",
    description:
      " Navara được biết đến là dòng sản phẩm nổi bật của Nissan. Dòng bán tải thương hiệu Nhật Bản nhận được những phản ứng tích cực từ người dùng Việt nhờ chất lượng hoàn thiện, trang bị tiện nghi vượt trội và khả năng vận hành ấn tượng dễ dàng chinh phục những khách hàng đam mê cầm lái.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "120km/h",
    gps: "Tích hợp GoogleMap",
    seatType: "có sấy ghế",
    automatic: "Tự động",
    description:
      " Chiếc xe gắn liền với nhiều cơ quan công quyền với không gian rộng, nhiều trang bị tiện nghị cho hàng ghế thứ hai, doanh số mẫu này luôn ổn định mặc dù có giai đoạn đi xuống nhưng Camry vẫn là mẫu xe được yêu thích trong phân khúc sedan cỡ D.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "120km/h",
    gps: "Tích hợp GoogleMap",
    seatType: "Có sấy ghế",
    automatic: "Tự động",
    description:
      " Đóng vai trò là mẫu SUV bán chạy nhất của BMW, X3 được ưa chuộng ở hầu hết các thị trường trọng điểm như Mỹ, Trung Quốc, châu Âu. Trong xu hướng toàn cầu hóa xe điện, hãng xe Đức đã sản xuất phiên bản chạy điện của X3 mang tên iX3. ",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "120km/h",
    gps: "Tích hợp GoogleMap",
    seatType: "Có sấy ghế tự động",
    automatic: "Tự động",
    description:
      " ",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Navara được biết đến là dòng sản phẩm nổi bật của Nissan. Dòng bán tải thương hiệu Nhật Bản nhận được những phản ứng tích cực từ người dùng Việt nhờ chất lượng hoàn thiện, trang bị tiện nghi vượt trội và khả năng vận hành ấn tượng dễ dàng chinh phục những khách hàng đam mê cầm lái.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "120km/h",
    gps: "Tích hợp GoogleMap",
    seatType: "Có sấy ghế tự động",
    automatic: "Tự động",
    description:
      "Mẫu SUV lớn nhất của thương hiệu Volvo gắn liền với sự an toàn. Với Volvo XC90, mẫu SUV này có loạt trang bị an toàn như cảnh báo điểm mù, hỗ trợ giữ làn đường, ga tự động thích ứng khoảng cách, hỗ trợ lái tự động, camera 360 độ và hỗ trợ đỗ xe tự động. Các trang bị tiện nghi theo xe cũng đáng chú ý với màn hình 9 inch đặt trung tâm, màn hình 12,3 inch sau vô-lăng, dàn loa Bowers Wilkins, hệ thống điều hòa 3 vùng, hàng ghế trước có sưởi/làm mát, massage và khả năng nhớ 3 vị trí.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "120km/h",
    gps: "Tích hợp GoogleMap",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  

];



export default carData;
