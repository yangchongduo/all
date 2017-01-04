
http://blog.csdn.net/include1224/article/details/53452824


博主机器配置：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
OS：Window 7 64bit
CPU：Intel i7-2600K
内存：8G
显卡：Nvidia GeForce GTX 560

（有人推荐使用 Windows PowerShell 代替 CMD，所以下面一、二、三、四步均在Power Shell下执行，“开始”->“附件”->“Windows Power Shell”->“Windows Power Shell”）

一、安装Python

1、通过Pip在Windows上安装Python

TensorFlow在Windows上只支持64位Python3.5，可以通过Python 3.5 from python.org 或 Python 3.5 from Anaconda 下载并安装Python3.5.2（注意选择正确的操作系统）。


2、设置环境变量

上一步安装完毕后，在PowerShell中输入pip是找不到该命令的，因此将Python安装路径下“%安装路径%\Scripts”添加到Path下；再到PowerShell中输入pip看到若干命令提示，则代表python安装成功（Python安装包自带pip）。“开始”->“所有程序”，也可以找到Python终端。


二、安装Cuda和CuDNN（CPU版本TensorFlow请忽略本步骤）

TensorFlow分为CPU版和GPU版，如果你打算安装GPU版，请先安装如下两个驱动：

1、CUDA安装：https://developer.nvidia.com/cuda-downloads

    2、CuDNN安装：https://developer.nvidia.com/cudnn（要注册Nvidia用户，并加入CuDNN开发组，填若干问卷就可以下载了）选择下载版本时要注意和Cuda版本匹配。解压后覆盖至CUDA的安装目录下

    例如：C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v8.0\

三、修改Pip国内源

为了使用国内镜像加速pip安装，需要如下修改：

WIndows 7 在“C:\Users\用户名\AppData\Local\pip”文件夹下，新建文本文件，添加内容：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
    [global]
index-url = http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
关于修改pip国内源可参考这里

四、安装TensorFlow

安装CPU版TensorFlow 0.12，Power Shell下输入：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
pip install --upgrade https://storage.googleapis.com/tensorflow/windows/cpu/tensorflow-0.12.0rc0-cp35-cp35m-win_amd64.whl

    安装GPU版TensorFlow 0.12，Power Shell下输入：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
pip install --upgrade https://storage.googleapis.com/tensorflow/windows/gpu/tensorflow_gpu-0.12.0rc0-cp35-cp35m-win_amd64.whl

    官网查看最新版本下载方式
通过pip安装，会提示错误“Http error 404”。估计是无法联网导致的，可以将上述安装tf的命令https及后面的地址复制，并粘贴到浏览器地址栏中手动下载文件。

然后在Power Shell中输入下述命令实现本地安装：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
pip install F:\DevResources\tensorflow_gpu-0.12.0rc0-cp35-cp35m-win_amd64.whl

出现错误：


不知什么原因，无法正常下载numpy 1.11.0。如法炮制，手动下载numpy（119MB）并安装。Numpy下载地址

我选择下载：numpy‑1.11.2+mkl‑cp35‑cp35m‑win_amd64.whl。其中1.11.2是nympy的版本，cp35表示支持python3.5，win_amd64就是支持windows64位操作系统。

下载完毕后先安装Numpy：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
pip install F:\DevResources\numpy-1.11.2+mkl-cp35-cp35m-win_amd64.whl

再安装TensorFlow（重复上面安装TensorFlow的步骤），安装成功。


五、测试TensorFlow

到“所有程序”下找到"Python 3.5 64bit"，出现命令窗口，输入测试代码：

[html] view plain copy 在CODE上查看代码片派生到我的代码片
>>>import tensorflow as tf
>>>sess = tf.Session()
>>>a = tf.constant(10)
>>>b = tf.constant(22)
    >>>print(sess.run(a + b))
32

正确输出结果32，安装完毕。
