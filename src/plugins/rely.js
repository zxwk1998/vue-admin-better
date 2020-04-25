/* eslint-disable */
import { copyright } from "@/config/settings";
if (process.env.NODE_ENV === "production") {
  let __encode = "sojson.com",
    _0xb483 = [
      "\x5F\x64\x65\x63\x6F\x64\x65",
      "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C",
    ];
  (function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1];
  })(window);
  var __Ox76877 = [
    "\x32\x30\x32\x30\x2D\x30\x31\x2D\x30\x31",
    "\u535A\u4E91\u89C6\u89C9\u79D1\u6280\x28\u9752\u5C9B\x29\u6709\u9650\u516C\u53F8",
    "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72",
    "\x67\x65\x74\x4D\x6F\x6E\x74\x68",
    "\x67\x65\x74\x44\x61\x74\x65",
    "\x66\x6C\x6F\x6F\x72",
    "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
    "\x62\x6F\x64\x79",
    "\x3C\x68\x31\x3E\u524D\u7AEF\u654F\u6377\u5F00\u53D1\u5E73\u53F0\u6388\u6743\u5230\u671F\x3C\x2F\x68\x31\x3E",
    "\x64\x69\x73\x70\x6C\x61\x79",
    "\x73\x74\x79\x6C\x65",
    "\x66\x6C\x65\x78",
    "\x61\x6C\x69\x67\x6E\x49\x74\x65\x6D\x73",
    "\x63\x65\x6E\x74\x65\x72",
    "\x6A\x75\x73\x74\x69\x66\x79\x43\x6F\x6E\x74\x65\x6E\x74",
    "\x63\x68\x75\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36",
    "\x63\x68\x75\x7A\x68\x69\x78\x69\x6E",
    "\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36\x40\x71\x71\x2E\x63\x6F\x6D",
    "\u521D\u5FD7\u946B\x20\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36\x40\x71\x71\x2E\x63\x6F\x6D",
    "\u521D\u5FD7\u946B\x31\x32\x30\x34\x35\x30\x35\x30\x35\x36\x40\x71\x71\x2E\x63\x6F\x6D",
    "\x66\x6F\x72\x45\x61\x63\x68",
    "\x3C\x68\x31\x3E\u524D\u7AEF\u654F\u6377\u5F00\u53D1\u5E73\u53F0\u7248\u6743\u4FE1\u606F\u5FC5\u987B\u4FDD\u7559\x2C\u8BF7\u5C0A\u91CD\u77E5\u8BC6\u4EA7\u6743\x3C\x2F\x68\x31\x3E",
  ];
  const authorizationDate = new Date(__Ox76877[0x0]);
  let authorizationPeriod;
  if (__Ox76877[0x1] === copyright) {
    authorizationPeriod = 30 * 12 * 10;
  } else {
    authorizationPeriod = 30 * 12 * 5;
  }
  if (authorizationPeriod < 0) {
    authorizationPeriod = 0;
  }
  const currentDate = new Date();
  let authorizationDateTimestamp = Date.UTC(
    authorizationDate[__Ox76877[0x2]](),
    authorizationDate[__Ox76877[0x3]](),
    authorizationDate[__Ox76877[0x4]]()
  );
  const currentDateTimestamp = Date.UTC(
    currentDate[__Ox76877[0x2]](),
    currentDate[__Ox76877[0x3]](),
    currentDate[__Ox76877[0x4]]()
  );
  if (authorizationDateTimestamp > currentDateTimestamp) {
    authorizationDateTimestamp = currentDateTimestamp;
  }
  const days = Math[__Ox76877[0x5]](
    (currentDateTimestamp - authorizationDateTimestamp) / (1000 * 60 * 60 * 24)
  );
  const daysLate = authorizationPeriod - days;
  if (daysLate <= 0) {
    document[__Ox76877[0x7]][__Ox76877[0x6]] = __Ox76877[0x8];
    document[__Ox76877[0x7]][__Ox76877[0xa]][__Ox76877[0x9]] = __Ox76877[0xb];
    document[__Ox76877[0x7]][__Ox76877[0xa]][__Ox76877[0xc]] = __Ox76877[0xd];
    document[__Ox76877[0x7]][__Ox76877[0xa]][__Ox76877[0xe]] = __Ox76877[0xd];
  }
  const copyrightList = [
    __Ox76877[0x1],
    __Ox76877[0xf],
    __Ox76877[0x10],
    __Ox76877[0x11],
    __Ox76877[0x12],
    __Ox76877[0x13],
  ];
  let bodyHide = true;
  copyrightList[__Ox76877[0x14]]((_0x5e9fxa) => {
    if (_0x5e9fxa === copyright) {
      bodyHide = false;
    }
  });
  if (true === bodyHide) {
    document[__Ox76877[0x7]][__Ox76877[0x6]] = __Ox76877[0x15];
    document[__Ox76877[0x7]][__Ox76877[0xa]][__Ox76877[0x9]] = __Ox76877[0xb];
    document[__Ox76877[0x7]][__Ox76877[0xa]][__Ox76877[0xc]] = __Ox76877[0xd];
    document[__Ox76877[0x7]][__Ox76877[0xa]][__Ox76877[0xe]] = __Ox76877[0xd];
  }
}
import "zx-rely";
