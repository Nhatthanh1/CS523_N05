# <div align="center">HƯỚNG DẪN SỬ DỤNG</div>
![Đây là tấm ảnh](https://raw.githubusercontent.com/Nhatthanh1/CS523_N05/Main/img/Picture1.png)

- Đây là giao diện của [demo](https://nhatthanh1.github.io/CS523_N05/ExternalSort/
)
- Khung ở **ngoài cùng bên trái** là nơi ta cần **điền** dữ liệu cần sắp xếp cũng tượng trưng cho dữ liệu trong file input ban đầu ( các phần tử trong khung cách nhau bằng dầu khoảng trắng ) 
- Khung **Block size** : ta cần điền số lượng block size mình mong muốn để sắp xếp
- Khung **Split size** : số phần tử mỗi lần tải xuống từ input

Sau khi điền các thông tin cần thiết thì ta ấn nút **“split to chunk”** để tải lần lượt các phần tử xuống từng block, sau đó tiếp tục ấn nút “ Sort chunk” thì các phần tử trong mỗi block sẽ được sắp xếp lại

Cuối cùng ta sẽ liên tiếp ấn nút **“Run step”**,  mỗi lần nhấn, hệ thống sẽ so sánh tất cả phần tử đầu tiên của mỗi block, cũng là phần tử nhỏ nhất của block đó, chọn được một phần tử nhỏ nhất tải vào “OutputArr”, lặp lại cho đến khi tải hết các phần tử .
