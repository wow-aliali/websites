import Mock from "mockjs";

const Random = Mock.Random;

Random.extend({
  housename: function() {
    var housenames = [
      "魔方公寓（窑口地铁站店）",
      "魔方公寓（天河公园店）",
      "冠寓（机场路店）",
      "泰丰大厦",
      "羊城公寓",
      "沐坡村",
      "泊寓（海浩店）",
      "金田花宛",
      "华康小区",
      "金海花园",
      "梦马青年社区",
      "旗寓（新溪二点）",
      "微公寓小区",
      "聚龙阁",
      "甲子花园"
    ];
    return this.pick(housenames);
  }
});

export default Mock.mock("/fangyuan", {
  "houses|15-30": [
    {
      "id|+1": 101,
      housename: "@housename",
      "image|1": [
        "https://image2cdn.loulifang.com.cn/fang/23/58/23F8E37ED1BD2002D3770A771F46D4471058_246_184.jpg",
        "https://imgcdn.loulifang.com.cn/shanghai/fang/6F/15/6FF13006D98EBAE03CABBBAC75F36F3B3415_246_184.jpg",
        "https://image2cdn.loulifang.com.cn/fang/30/93/30527BA5D39A56FA666B1699C66244287493_246_184.jpg",
        "https://image1cdn.loulifang.com.cn/fang/07/AE/078d8e91626a4f09918d324bfb7066ae_246_184.jpg",
        "https://image1cdn.loulifang.com.cn/fang/4D/22/4DFD8EDD612098B0551C47ED4AB037D92322_246_184.jpg",
        "https://image2cdn.loulifang.com.cn/fang/22/11/22008D9FF5B4DCE2E5E935CFE2554A363511_246_184.jpg",
        "https://image2cdn.loulifang.com.cn/fang/E7/10/E7A5B68E38510C1C93BA47F6E5CB2BC89910_246_184.jpg",
        "https://image1cdn.loulifang.com.cn/fang/58/29/58358517DCA4B7952096201919AFF37F1529_246_184.jpg",
        "https://image1cdn.loulifang.com.cn/fang/0A/45/0AC5ACC9E5951E17FD65DDFAE3C43CA57945_246_184.jpg",
        "https://image1cdn.loulifang.com.cn/fang/A9/76/A9520771D8C7FDE521A836BA8B51E98F2376_246_184.jpg",
        "https://image2cdn.loulifang.com.cn/fang/02/72/022F2B6A9348EE2E95910710345F29D39072_246_184.jpg",
        "https://image1cdn.loulifang.com.cn/fang/76/21/7631241A92B519ED374DACC8AAC66A929021_246_184.jpg"
      ],
      "houseType|1": [
        "1室1厅1卫",
        "1室0厅1卫",
        "2室1厅1卫",
        "3室1厅1卫",
        "4室1厅1卫"
      ],
      houseIntro: "公寓服务",
      "floor|1": ["3/9层", "6/9层", "2/4层", "3/5层", "4/4层", "2/3层"],
      number: /\d{13,16}/,
      updateTime: Random.now("yyyy/MM/dd"),
      "sellType|1": ["整租", "合租"],
      "roomCount|1-3": 1,
      "roomType|1": ["整套", "主卧", "次卧"],
      "roomSize|15-40": 30,
      "roomDirection|1": [
        "东南",
        "南北",
        "东西",
        "西南",
        "朝南",
        "朝东",
        "朝北"
      ],
      landlord: "何小姐",
      "price|800-3000": 1000,
      "servicePrice|0-200": 100,
      extra: {
        "shortSell|1": Boolean,
        "deposit|1": ["押二付一", "押一付一", "押一付二"],
        "centralFlat|1": Boolean,
        "toilet|1": Boolean,
        "kitchen|1": Boolean,
        "decoration|1": ["普通装修", "精装修"]
      },
      roomIntro:
        "公寓服务： 保洁、24小时监控、门禁、健身房、24小时热水、无限WIFI、电梯、监控、门禁、健身室、桌球室、投影仪、公共休闲区 公寓周边： 门店内各类设施设备选材环保低碳，配备空调，电视，冰箱，洗衣机等品牌家电。周边汇聚小型便利店有美宜家，附近有各种美食小店，步行100米就有华润万家超市，芳村肉菜市场，步行600米有西湾荟广场，各种美食与电影院，从西湾荟过去200米就有大型的海鲜市场海宝湾，可以购买后在附近餐厅加工，也可带回公寓自主加工。另一边有嘉洲广场，只需要步行15分钟，有各种美食，屈臣氏，KTV等，是您工作、娱乐、休闲最理想的居住地。 公寓交通： 魔方公寓广州滘口地铁店店地处于广州荔湾区，交通便利，地铁5号线滘口站B出口，步行仅需5分钟20分钟直达天河珠江新城，有广佛路口公交站，滘口客运站公交总站多次线路通往广州各大区域，让您无忧出行。",
      device: [
        {
          name: "厨房",
          src:
            "https://img.loulifang.com.cn/other/20/96/200B6944EA2140160AE9A64373B074316696.png"
        },
        {
          name: "卫生间",
          src:
            "https://img.loulifang.com.cn/other/14/72/14392F869C8D5778332A0956AC14C1CC8572.png"
        },
        {
          name: "飘窗",
          src:
            "https://img.loulifang.com.cn/other/0B/30/0B371C995E97CB2DCFBC0EBF16E8EAA98230.png"
        },
        {
          name: "冰箱",
          src:
            "https://img.loulifang.com.cn/other/57/56/576771570323F1C0AA68269A9F0A63CF8656.png"
        },
        {
          name: "空调",
          src:
            "https://img.loulifang.com.cn/other/FD/32/FD2E24C46DAA0671430911D135C2513A3232.png"
        },
        {
          name: "洗衣机",
          src:
            "https://img.loulifang.com.cn/other/CA/89/CA203B83374F199140DFF8A0750981DC9789.png"
        },
        {
          name: "沙发",
          src:
            "https://img.loulifang.com.cn/other/3E/42/3E7A2A680B07829B092F433914BCE0CA7742.png"
        },
        {
          name: "写字台",
          src:
            "https://img.loulifang.com.cn/other/D9/10/D93E4505CE5695C52DDF113A58EE4B674810.png"
        },
        {
          name: "电视机",
          src:
            "https://img.loulifang.com.cn/other/53/57/539332558A39886D0CD935030477CBE81357.png"
        },
        {
          name: "双人床",
          src:
            "https://img.loulifang.com.cn/other/31/65/315FB4707C93DEEB7DB8B9440C0596A43365.png"
        },
        {
          name: "衣柜",
          src:
            "https://img.loulifang.com.cn/other/D7/03/D77E6D0A812552130A110D57E05FD41A8503.png"
        },
        {
          name: "热水器",
          src:
            "https://img.loulifang.com.cn/other/91/54/91EC48A2E09CAD7BD149A7A65AFA961C5254.png"
        },
        {
          name: "宽带",
          src:
            "https://img.loulifang.com.cn/other/A1/24/A11E4B58817312A61A77A80C4415ACC19024.png"
        }
      ]
    }
  ]
});
