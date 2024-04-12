const IDEProjectData = [
  {
    projectName: "Birdy",
    id: "birdy",
    thumbnail: "/thumbnails/Birdy.webp",
    link: {
      aDesign: "https://competition.adesignaward.com/design.php?ID=149441",
    },
    description: [
      "Birdy是一个用于唤起用户与生物互动的触感体验的音响，而不是与一个几何物体。用户可以使用这只顶部的鸟形雕塑来管理他们的音乐播放。通过在不同方向摆动它，用户可以调整音量，跳到下一首或前一首歌曲等。除了音乐播放功能之外，Birdy还可以作为智能家居助手，以鸟叫声作为回应。其目标是创造更自然和情感上吸引人的用户体验。",
      "Birdy是我的本科毕业设计，获得了绍兴工业设计大赛优秀奖与意大利A’Design奖。",
    ],
    img: [
      "/imgs/birdy/01.png",
      "/imgs/birdy/02.png",
      "/imgs/birdy/03.png",
      "/imgs/birdy/04.png",
      "/imgs/birdy/05.png",
      "/imgs/birdy/06.png",
    ],
  },
  {
    projectName: "Flipping",
    video: "utkkCsSskik",
    id: "flipping",
    thumbnail: "/thumbnails/Flipping.webp",
    link: "https://www.youtube.com/embed/utkkCsSskik?si=sBQhcia2YaYwkfVf",
    description: [
      "科技能够让我们的生活变得更好，但是现在我们处在这样一种情况，那就是我们控制所有物品都是通过一种东西——屏幕。虽然屏幕非常直观与方便，但是每天出玻璃打交道太过无聊了。我们需要一些不一样的东西，重新利用我们的手，我们的触觉、嗅觉，而不是通过手机或其他屏幕。所以我的目标是设计一种物理体验，当你听音乐时能够与之进行有趣的互动。",
      "我从零开始制作了Flipping，包括工业设计、结构设计与内部电路。首先是原型测试，草模验证成功之后，进行内部电路的迭代，不断打板-焊接-测试-修改，3D打印外壳，修改外部细节。电路测试完毕后刷入Arduino的Bootloader，刷入Arduino程序，通电测试。都测试无误后，最后喷漆，组装，完成。",
      "Flipping是我第一个真正意义上的工业设计产品，而不是只活在屏幕上的设计。",
    ],
    img: [
      "/imgs/flipping/01.png",
      "/imgs/flipping/02.png",
      "/imgs/flipping/03.png",
      "/imgs/flipping/04.png",
      "/imgs/flipping/05.png",
      "/imgs/flipping/06.png",
    ],
  },

  {
    projectName: "Arduino Mini",
    id: "arduinomini",
    thumbnail: "/thumbnails/Arduino.webp",
    link: {
      github: "https://github.com/anxndsgn/Arduino-mini",
      easyEDA: "https://oshwhub.com/camcyano/arduinomini",
    },
    description: [
      "Arduino Mini是一款小型微控制器板，适用可穿戴与小型化产品原型搭建与测试。",
    ],
    img: [
      "/imgs/arduinomini/01.png",
      "/imgs/arduinomini/02.png",
      "/imgs/arduinomini/03.png",
    ],
  },

  {
    projectName: "OpenWear",
    id: "openwear",
    thumbnail: "/thumbnails/OpenWear.webp",
    link: "https://openwear.xyz",
    description: [
      "现在的可穿戴与电子纺织品原型制作一般是使用导电纱线缝制，使电子器件实现电气连接，但缝纫之后的调试会变得麻烦，传统的快速原型搭建工具并不适合该领域。同时，Lilypad Arduino开发板与相应的模块随着时间的发展也逐渐无法满足创客、艺术家与学生们的需求。为了解决这些问题，我设计了OpenWear：一个可穿戴电路快速原型搭建与验证的工具包。OpenWear包括三个组件：（1）OpenWear Core，这是一个基于ESP-32的开发板，用于替代Lilypad；（2）OpenWear Module，一个带有传感器和执行器的电子模块集合；和（3）OpenWear Thread，将Core和Module连接起来的导线。除此之外，我们为OpenWear搭建一个在线wiki网站并完全开源了硬件设计。我们在Core和Module的PCB上嵌入磁铁，通过磁铁可以固定在纺织品上。加上Thread两端的O型环接线端子，确保了快速的连接。",
      "OpenWear是我的研究生研究项目，方向为人机交互与可穿戴智能。",
    ],
    img: [
      "/imgs/openwear/01.png",
      "/imgs/openwear/02.png",
      "/imgs/openwear/03.png",
      "/imgs/openwear/04.png",
    ],
  },
];

export { IDEProjectData };
