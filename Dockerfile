FROM nginx

MAINTAINER vue-admin-beautiful
LABEL description=本项目基于vue-admin-beautiful开源版构建
LABEL qq=783963206

# 环境变量
ENV TZ=Asia/Shanghai \
    RUN_USER=nginx \
    RUN_GROUP=nginx \
    DATA_DIR=/data/web \
    LOG_DIR=/data/log/nginx

# 工作目录
WORKDIR ${DATA_DIR}

# 日志输出
RUN ["echo","vue-admin-beautiful - UI building..."]

# 切换为上海时区
RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone

# 创建日志文件夹
RUN mkdir ${LOG_DIR} -p
RUN chown nginx.nginx -R ${LOG_DIR}

# 拷贝dist包文件
COPY ./dist ./

# 拷贝nginx配置文件
ADD nginx.conf /etc/nginx/nginx.conf
ADD nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT nginx -g "daemon off;"
